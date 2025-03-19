import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from "./pages/Cart/Cart";
import { FaShoppingCart } from "react-icons/fa";

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Link to='/'>Homepage</Link>
          <Link to='/cart'>
            <FaShoppingCart />
          </Link>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
