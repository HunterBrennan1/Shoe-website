
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Main from './components/main';
import Video from './components/video';
import Shop from './components/shop';
import Checkout from './components/checkout';


function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <Main />
      <Video />
      <Shop />
      <Checkout />
    </div>
  );
}

export default App;
