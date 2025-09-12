import axios from "axios";
import tokenDel from "@/utils/tokenDel.util";

let isRefreshing = false;

const doLogout = () => {
  tokenDel();
  window.location.href = "/";
}

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "x-site": process.env.REACT_APP_X_SITE,
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("emailToken");
    if (token && config.url !== "/members/login" && config.url !== "/members/signup") {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: any) => {
    const originalRequest = error.config;
    const statusCode = error.response.data.statusCode;
    const errorData = error.response.data;

    if (statusCode === 462) {
      alert("토큰이 만료되었습니다.");
      doLogout();
      return Promise.reject(errorData);
    }

    if (statusCode === 461) {
      if (isRefreshing) {
        return Promise.reject(errorData);
      }

      isRefreshing = true;
      try {
        const refreshToken = localStorage.getItem("emailRefreshToken");

        if (!refreshToken) {
          alert("세션이 만료되었습니다.");
          doLogout();
          return Promise.reject(errorData);
        }

        const res = await axios.post(`${process.env.REACT_APP_API_URL}/members/refresh`,
          {
            refresh_token: refreshToken,
          },
          {
            headers: {
              "Content-Type": "application/json",
              "x-site": process.env.REACT_APP_X_SITE,
            },
          },
        );

        if (res.status === 461 || res.status === 462) {
          alert("세션이 만료되었습니다.");
          doLogout();
          return Promise.reject(errorData);
        }

        const newAccessToken = res.data.data.access_token;
        const newRefreshToken = res.data.data.refresh_token;

        // 로컬스토리지에 새 토큰 저장
        localStorage.setItem("emailToken", newAccessToken);
        if (newRefreshToken) {
          localStorage.setItem("emailRefreshToken", newRefreshToken);
        }

        // 원래 요청의 헤더에 새 토큰 적용 후 재시도
        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }
        return apiClient(originalRequest);
      } catch (error: any) {
        // 재발급 실패 => 완전히 로그아웃
        alert("세션이 만료되었습니다.");
        doLogout();
        return Promise.reject(error.response.data);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(errorData);
  }
);

export default apiClient;