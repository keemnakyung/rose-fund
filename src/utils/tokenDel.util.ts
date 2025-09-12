export default function tokenDel() {
    localStorage.removeItem("emailToken");
    localStorage.removeItem("emailRefreshToken");
  }