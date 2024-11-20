import './App.css';
import peaks from './peaks.svg';
import ssspill from './ssspill.svg';

function App() {
  return (
    <>
      <div id="main-content">
        <h1 class="dont-panic">Don't Panic!</h1>
        <img src={peaks} className="bg-svg" width="100%" height="33%" alt="peaks-bg" />
      </div>
      
    </>
  );
}

export default App;
