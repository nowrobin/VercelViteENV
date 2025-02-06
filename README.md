# VercelViteENV


### env에 포함된 내용
````
VITE_KEY = vite_key
NOT_VITE_KEY = not_vite_key
VITE_VERCEL_KEY = vercelKey 
NOT_VITE_VERCEL_KEY  =not_vercelKey
````
<img width="980" alt="image" src="https://github.com/user-attachments/assets/832a1476-b18d-4c8d-b3e4-0e59be8424c5" />


### vite.config.ts 
````
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
    NOT_VITE_VERCEL_KEY: process.env.NOT_VITE_VERCEL_KEY,
    VITE_VERCEL_KEY: process.env.VITE_VERCEL_KEY,
  },
});
````

### APP.tsx
`````
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
`````

# RESULT 
|로컬 | 버셀| 
|----|----|
|<img width="132" alt="image" src="https://github.com/user-attachments/assets/de3927bc-af12-4428-8a53-86e7e026a1d5" />|<img width="248" alt="image" src="https://github.com/user-attachments/assets/7cd088f2-98d6-4158-acb6-e7352e6120a4" />|
