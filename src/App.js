import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Home from './components/Home';
import Cart from './components/Cart';
import Products from './components/Products'
import Contact from './components/Contact';
import Solution from './components/Solution';
import Breakout from './components/Breakout';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Home />} /> 
        <Route path='/solution' exact element={<Solution />} /> 
        <Route path='/contact' exact element={<Contact />} /> 
        <Route path='/cart' exact element={<Cart />} /> 
        <Route path='/products' exact element={<Products />} /> 
        <Route path='/breakout' exact element={<Breakout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
