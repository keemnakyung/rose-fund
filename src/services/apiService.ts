import { CommonDataResponse, CommonListResponse } from "@/dtos/common.dto";
import apiClient from "@/services/apiClient";

interface TClass<T> {
  new (...args: any[]): T;
}

export const apiService = {
  // GET data 요청
  getData: async <T>(
    url: string, 
    params?: Record<string, any>,
    ClassRef?: new (d?: Partial<T>) => T
  ): Promise<CommonDataResponse<T>> => {
    const response = await apiClient.get(url, { params });
  
    return new CommonDataResponse<T>(response.data, ClassRef);
  },

  // GET list 요청
  getList: async <T>(
    url: string, 
    params?: Record<string, any>,
    ClassRef?: new (d?: Partial<T>) => T
  ): Promise<CommonListResponse<T>> => {
    const response = await apiClient.get(url, { params });
  
    return new CommonListResponse<T>(response.data, ClassRef);
  },

  post: async <T>(
    url: string,
    data?: Record<string, any>,
    ClassRef?: TClass<T>
  ): Promise<T> => {
    const response = await apiClient.post<T>(url, data);
    return ClassRef ? new ClassRef(response.data) : response.data;
  },

  // POST data 요청
  postData: async <T>(
    url: string,
    data?: Record<string, any>,
    ClassRef?: new (d?: Partial<T>) => T
  ): Promise<CommonDataResponse<T>> => {
    const response = await apiClient.post(url, data);
    
    return new CommonDataResponse<T>(response.data, ClassRef);
  },

  // POST list 요청
  postList: async <T>(
    url: string, 
    data?: Record<string, any>,
    ClassRef?: new (d?: Partial<T>) => T
  ): Promise<CommonListResponse<T>> => {
    const response = await apiClient.post(url, data);
    console.log(response);
    return new CommonListResponse<T>(response.data, ClassRef);
  },

  // PUT 요청
  putData: async <T>(
    url: string,
    data?: Record<string, any>,
    ClassRef?: new (d?: Partial<T>) => T
  ): Promise<CommonDataResponse<T>> => {
    const response = await apiClient.put(url, data);
  
    return new CommonDataResponse<T>(response.data, ClassRef);
  },

  // DELETE 요청
  deleteData: async <T>(
    url: string,
    data?: Record<string, any>,
    ClassRef?: new (d?: Partial<T>) => T
  ): Promise<CommonDataResponse<T>> => {
    const response = await apiClient.delete(url, { data });
  
    return new CommonDataResponse<T>(response.data, ClassRef);
  },
};

// export const fileApiService = {
//   // GET 요청
//   get: async <T>(url: string, options?: { params?: Record<string, any>; responseType?: ResponseType }): Promise<T> => {
//     try {
//       const response = await fileApiClient.get<T>(url, {
//         params: options?.params,
//         responseType: options?.responseType as any,
//       });
//       return response.data;
//     } catch (error: any) {
//       throw error;
//     }
//   },

//   // POST 요청
//   post: async <T>(url: string, data?: Record<string, any>): Promise<T> => {
//     try {
//       const response = await fileApiClient.post<T>(url, data);
//       return response.data;
//     } catch (error: any) {
//       throw error;
//     }
//   },
// };