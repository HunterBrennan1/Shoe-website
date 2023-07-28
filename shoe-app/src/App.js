
import './App.css';
import Nav from './components/nav';
import Hero from './components/hero';
import Main from './components/main';
import Video from './components/video';
import Shop from './components/shop';
import Checkout from './components/checkout';
import { BrowserRouter as Router, Routes, Switch, Route, BrowserRouter } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route exact path="/" element={<Shop />} compontent={Shop}></Route>
        <Route exact path="/checkout" element={<Checkout />} compontent={Checkout}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
