import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    NOT_VITE_VERCEL_KEY: process.env.NOT_VITE_VERCEL_KEY,
    VITE_VERCEL_KEY: process.env.VITE_VERCEL_KEY,
    VERCEL_URL: process.env.VERCEL_URL,
    VITE_VERCEL_URL: process.env.VITE_VERCEL_URL,
    VITE_URL: process.env.VITE_URL,
  },
});
