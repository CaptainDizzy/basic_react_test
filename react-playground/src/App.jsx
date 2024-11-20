import { useState } from 'react'
import pdilogo from '/pdi-logo.png'
import pixels from '/pixel-bg.svg';
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
          <h1>Forum to JSON Submission Test</h1>
          <p>The form below should be exported as a JSON file somewhere upon submission. In theory, at least...</p>

          <div class="form-wrap">
            <form>
              <fieldset>
                <label>Name:</label><br />
                <input type="text" id="name" name="name"></input><br />
                <label>Primary Color (Hex):</label><br />
                <input type="text" id="primarycolor" name="primarycolor" placeholder="#000000"></input>
                <input type="submit"></input>
              </fieldset>
            </form>
          </div>

          <img src={pixels} className="bg-svg" alt="background" />
        </div>
      </div>
    </div>
  )
}

export default App
