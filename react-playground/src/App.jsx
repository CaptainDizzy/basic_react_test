import './App.css';
import FormTest from './form-test/form'
import SideBar from './SideBar';
import HeadBar from './HeadBar';
import pixels from '/pixel-bg.svg';

let currentPage = '';

function Page() {
  if (currentPage == 'TestPage')
  {
    return (
      <TestPage />
    )
  } else {
    return (
      <FormTest />
    )
  }
}

export default function App() {

  return (
    <div id="site-wrap">
      <HeadBar />
      <div id="content-wrap">
        <SideBar />
        <div id="main-content">

          <Page />

          <img src={pixels} className="bg-svg" alt="background" />
        </div>
      </div>
    </div>
  )
}
