import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://3.35.48.123:8080", // 백엔드 URL로 변경하세요
  withCredentials: true, // 쿠키를 포함시키기 위해 withCredentials 옵션을 활성화
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 전에 인터셉터를 추가하여 Authorization 헤더 설정
axiosInstance.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);


