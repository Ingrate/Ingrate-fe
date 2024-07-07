import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createServer } from "vite";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

// import.meta.url을 파일 경로로 변환
const __filename = fileURLToPath(import.meta.url);
// 파일 경로에서 디렉터리 경로 추출
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   https: {
  //     key: readFileSync(resolve(__dirname, "./localhost+2-key.pem")),
  //     cert: readFileSync(resolve(__dirname, "./localhost+2.pem")),
  //   },
  // },
});
