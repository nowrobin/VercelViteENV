
import './App.css'

function App() {

  //VITE 추가/삭제  VERCEL 추가 삭제 
  const viteKey = import.meta.env.VITE_KEY;
  const notViteKey = import.meta.env.NOT_VITE_KEY;
  const vercelKey = import.meta.env.VITE_VERCEL_KEY;
  const notVercelKey = import.meta.env.NOT_VITE_VERCEL_KEY;
  const viteVercel = import.meta.env.VITE_VERCEL_URL;
  const vite = import.meta.env.VITE_URL;
  const vercel = import.meta.env.VERCEL_URL;
  return (
    <>
      <div></div>
      <div>{viteKey}</div>
      <div>{notViteKey}</div>
      <div>{vercelKey}</div>
      <div>{notVercelKey}</div>
      <div>{viteVercel}</div>
      <div>{vite}</div>
      <div>{vercel}</div>
    </>
  )
}

export default App
