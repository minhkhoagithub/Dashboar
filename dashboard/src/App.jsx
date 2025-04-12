import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './component/Layout.jsx'
import Toggle from './component/Toggle.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout/>
      {/* <Toggle/> */}
    </>
  )
}

export default App
