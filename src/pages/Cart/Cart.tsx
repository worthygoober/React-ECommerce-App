import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { removeFromCart, updateQuantity, clearCart } from "../../redux/cartSlice";
import './Cart.css';

const Cart: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleCheckout = () => {
        dispatch(clearCart());
        alert('Checkout successful! The cart has now been cleared.')
    };

  return (
    <div className="cart-card">
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
            <p>The cart is empty.</p>
        ) : (
            <>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <img className="cart-image" src={item.image} alt={item.title} />
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price} x {item.quantity}</p>
                            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>

                            <input type="number"
                            value={item.quantity}
                            onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 1 }))}
                            min='1'
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <div className="cart-summary">
                <p>Total Items: {totalItems}</p>
                <p>Total Price: ${totalPrice.toFixed(2)}</p>
                <button onClick={handleCheckout}>Checkout</button>
            </div>
            </>
        ) }
        
    </div>
  )
};

export default Cart;