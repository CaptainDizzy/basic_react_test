import currentPage from './App'

export default function SideBar() {
  return (
    <>
      <div id="sidebar">
        <div id="sidebar-content">
          <div className="sidebar-header">
            <h2 className="sidebar-header-title">Menu Header</h2>
          </div>
          <div className="submenu-list">
            <ul>
              <li><a href="" onClick={() => currentPage = 'TestPage'}>Test Page</a></li>
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