import { useState } from 'react'
import pdilogo from '/pdi-logo.png'
import peaks from '/peaks.svg';
import ssspill from '/ssspill.svg';
import './App.css'

function HeadBar() {
  return (
    <>
      <div id="head-bar">
        <img src={pdilogo} id="header-logo" alt="Company logo" />
        <div id="nav-wrap">
        <a class="nav-item" href="">Nav Item</a>
        <a class="nav-item" href="">Nav Item</a>
        <a class="nav-item" href="">Nav Item</a>
        </div>
      </div>
    </>
  )
}
function SideBar() {
  return (
    <>
      <div id="sidebar">
        <div id="sidebar-content">
          <div class="sidebar-header">
            <h2 class="sidebar-header-title">Menu Header</h2>
          </div>
          <div class="submenu-list">
            <ul>
              <li><a href="">Submenu Link</a></li>
            </ul>
            <ul>
              <li><a href="">Another Link</a></li>
            </ul>
            <ul>
              <li><a href="">These do Nothing</a></li>
            </ul>
            <ul>
              <li><a href="">Just Placeholders</a></li>
            </ul>
          </div>
        </div>
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
          <h1>Don't Panic!</h1>
          <p>This is just a test.</p>
          <img src={peaks} className="bg-svg" alt="background" />
        </div>
      </div>
    </div>
  )
}

export default App
