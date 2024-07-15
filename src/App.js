import './App.css';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/homepage/HomePage';
import Cart from './pages/cart/Cart';
import ShopContext from './shopcontext/ShopContext';


function App() {
  return (
    <div className="App">
      <ShopContext>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContext>
    </div>
  );
}

export default App;
