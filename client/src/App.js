import './App.css';
import Scene from './components/Scene'
import Marquee from './components/Marquee';
import Home from './home';


function App() {
  return (
    <div className="App">
      <div className='scene'>
      <Scene/>
      </div>
      <div className='marquee'>
      <img src="./images/marquee.png" id="marquee" alt="marquee"></img>
        </div>
        <Home/>
    </div>
  );
}

export default App;
