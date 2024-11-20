import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import peaks from '/peaks.svg';
import ssspill from '/ssspill.svg';
import './App.css'

function HeadBar() {
  return (
    <>
      <div id="head-bar">
      </div>
    </>
  )
}
function SideBar() {
  return (
    <>
      <div id="side-bar">
      </div>
    </>
  )
}

function App() {
  return (
    <div id="site-wrap">
      <HeadBar></HeadBar>
      <div id="content-wrap">
        <SideBar></SideBar>
        <div id="main-content">
          <h1 class="dont-panic">Don't Panic!</h1>
          <img src={peaks} className="bg-svg" alt="background" />
        </div>
      </div>
    </div>
  )
}

export default App
