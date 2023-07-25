
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Main from './components/main';
import Video from './components/video';
import Shop from './components/shop';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Main />
      {/* <Video /> */}
      <Shop />
    </div>
  );
}

export default App;
