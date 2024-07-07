import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://13.124.89.27:8080", // 백엔드 URL로 변경하세요
  withCredentials: true, // 쿠키를 포함시키기 위해 withCredentials 옵션을 활성화
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("SESSION")}`, // 쿠키에서 토큰 가져오기
  },
});

function getCookie(name) {
  const cookieString = document.cookie;
  const cookies = cookieString.split("; ");

  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue); // 쿠키 값이 URL 인코딩되어 있을 수 있으므로 디코딩
    }
  }

  return undefined;
}
