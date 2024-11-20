import { useState } from 'react';
import DownloadJSON from './DownloadJSON';
import pdilogo from '/pdi-logo.png';
import pixels from '/pixel-bg.svg';
import './App.css';

function HeadBar() {
  return (
    <>
      <div id="head-bar">
        <img src={pdilogo} id="header-logo" alt="Company logo" />
        <div id="nav-wrap">
        <a className="nav-item" href="">Nav Item</a>
        <a className="nav-item" href="">Nav Item</a>
        <a className="nav-item" href="">Nav Item</a>
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
          <div className="sidebar-header">
            <h2 className="sidebar-header-title">Menu Header</h2>
          </div>
          <div className="submenu-list">
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

export default function App() {

  const [data, setData] = useState({
    name: '',
    color: ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    alert('Button Click!');
  }

  return (
    <div id="site-wrap">
      <HeadBar></HeadBar>
      <div id="content-wrap">
        <SideBar></SideBar>
        <div id="main-content">
          <h1>Forum to JSON Submission Test</h1>
          <p>The form below should be exported as a JSON file somewhere upon submission. In theory, at least...</p>

          <div className="form-wrap">
            <form>
              <fieldset>
                <label>Name:</label><br />
                <input type="text" id="name" name="name" 
                onChange={e => setData({
                      name: e.target.value,
                      color: data.color
                    })}>
                </input><br />

                <label>Primary Color (Hex):</label><br />
                <input type="text" id="primarycolor" name="primarycolor" placeholder="#000000" 
                  onChange={e => setData({
                      name: data.name,
                      color: e.target.value
                    })}>
                </input>
                {/* <button className="submit-btn" onClick={handleSubmit}>Submit</button> */}
                <DownloadJSON data={data} fileName="testData" />
              </fieldset>
            </form>
          </div>

          <br />
          <h3>Name: {data.name}</h3>
          <h3>Color: {data.color}</h3>

          <img src={pixels} className="bg-svg" alt="background" />
        </div>
      </div>
    </div>
  )
}
