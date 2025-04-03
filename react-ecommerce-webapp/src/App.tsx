import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home';
import Cart from "./pages/Cart/Cart";
import { NavBar } from "./components/NavBar/NavBar";
import './App.css'


function App() {
  

  return (
    <>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
