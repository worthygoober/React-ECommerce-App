import { Link } from "react-router-dom";
import './NavBar.css';
import { FaShoppingCart } from "react-icons/fa";


export const NavBar = () => {

    return (
        <>
            <div className="nav-container">
                <Link to='/' className="link">Home</Link>
                <Link to='/cart'>
                    <FaShoppingCart className="cart-icon"/>
                </Link>
            </div>
        </>
  )
};