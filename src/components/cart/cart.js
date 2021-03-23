import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/appContext'
import useCart from '../hooks/useCart'
import './cart.css'
import CartList from './cartList/cartList'

/* We can create a use states that can be specified by caller like say 'mini', 'fullpage' or  draggable*/
// this is going to subscribe to  a cart context where it is able to read the cart values
const Cart = (props) => {
    const appContext = useContext(AppContext)
    const [cart] = useCart();
    let cartCount = cart.count /* appContext.cartContext.cart.count; */
    const classNames = ["cart-btn"];
    cartCount ? classNames.push("cartNonEmpty") : classNames.push("cartEmpty")
    return(
        <>{
            props.size === 'mini' ?             
            <Link to="/cart">
                <button className={classNames.join(" ")}>
                   Cart({cartCount})
                </button>
            </Link> 
            : 
            <div className="cart-items-container">
                <div>
                    <h3>Please, review your cart items</h3>
                </div>
                <ul className="cart-card-shadowed cart-list">
                {
                    cartCount > 0 ? 
                    appContext.cartContext.cart.items.map(prodObject => {
                        return (
                                <CartList key={prodObject.product._id.toString() + prodObject.product.name} productObject={prodObject}/>
                        )
                    }) : 
                    <h4>Cart is empty</h4>
                }
                </ul>
               { cartCount > 0 ? <Link to="/checkout">
                <button className="btn-primary cart-btn-submit">Place Order</button>
                </Link> : ""}
            </div>

        }

        </>
    )
}

export default Cart