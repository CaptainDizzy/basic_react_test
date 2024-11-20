import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import peaks from '/peaks.svg';
import ssspill from '/ssspill.svg';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main-content">
        <h1 class="dont-panic">Don't Panic!</h1>
        <img src={peaks} className="bg-svg" width="100%" height="33%" alt="peaks-bg" />
      </div>
      
    </>
  )
}

export default App
