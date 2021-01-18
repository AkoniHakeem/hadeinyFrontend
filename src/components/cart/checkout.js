// delivery address
import "./checkout.css"
import useInputOnchange from "../useInputOnchange"
import { Link } from "react-router-dom"
import { useContext } from "react"
import {AppContext} from "../context/appContext"

// checkout / place order button

// read the cart in app context

const Checkout = function(props) {
    const [value, error, bindform, clearInput] = useInputOnchange("Enter your delivery address")
    const appContext = useContext(AppContext);
    console.log(JSON.stringify(bindform))
    const checkout = function (){
        appContext.cartContext.cartDispatch({type:"emptyCart"})
    }
    return (
        <div className="checkout">
            <p>Please, supply the address to forward your orders</p>
            <form className="card-shadowed">
                <div className="label-input-group">
                    <label>Delivery Address</label>
                    <input className="input-medium" {...bindform} />
                </div>
                <Link to="/thank-you-for-your-order">
                    <button className="checkout-btn" onClick={checkout.bind(this)}>Checkout</button>
                </Link>
            </form>
        </div>
    )
}

export default Checkout
