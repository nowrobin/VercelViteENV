
import './App.css'

function App() {
  const viteKey = import.meta.env.VITE_KEY;
  const notViteKey = import.meta.env.NOT_VITE_KEY;
  const vercelKey = import.meta.env.VITE_VERCEL_KEY;
  const notVercelKey = import.meta.env.VITE_NOT_VERCEL_KEY;
  return (
    <>
      <div>{viteKey}</div>
      <div>{notViteKey}</div>
      <div>{vercelKey}</div>
      <div>{notVercelKey}</div>
    </>
  )
}

export default App
