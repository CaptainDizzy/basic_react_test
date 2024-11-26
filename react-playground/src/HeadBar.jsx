import pdilogo from '/pdi-logo.png';

export default function HeadBar() {
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