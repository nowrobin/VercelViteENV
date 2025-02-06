# VercelViteENV


env에 포함된 내용


VITE_KEY = vite_key
NOT_VITE_KEY = not_vite_key
VITE_VERCEL_KEY = vercelKey 
NOT_VITE_VERCEL_KEY  =not_vercelKey



### vite.config.ts 
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    NOT_VITE_VERCEL_KEY: process.env.NOT_VITE_VERCEL_KEY,
    VITE_VERCEL_KEY: process.env.VITE_VERCEL_KEY,
  },
});

### APP.tsx
function App() {
  const viteKey = import.meta.env.VITE_KEY; //Config에 Define이 안된 VITE가 들어간 키 
  const notViteKey = import.meta.env.NOT_VITE_KEY; //Config에 Define이 안된 VITE가 안들어간 키 
  const vercelKey = import.meta.env.VITE_VERCEL_KEY; //Config에 Define이 추가된 VITE가 들어간 키 
  const notVercelKey = import.meta.env.NOT_VITE_VERCEL_KEY;//Config에 Define이 추가된 VITE가 안들어간 키 
  return (
    <>
      <div>{viteKey}</div>
      <div>{notViteKey}</div>
      <div>{vercelKey}</div>
      <div>{notVercelKey}</div>
    </>
  )
}
