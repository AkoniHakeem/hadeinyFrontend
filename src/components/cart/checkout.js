// delivery address
import "./checkout.css"
<<<<<<< HEAD
import useInputOnchange from "../hooks/useInputOnchange"
import { Link, Redirect, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import {AppContext} from "../context/appContext"
import useAuth from "../hooks/useAuth"
import useCart from "../hooks/useCart"
import config from "../../config"
import useFetch from "../hooks/useFetchFrom"
=======
import useInputOnchange from "../useInputOnchange"
import { Link } from "react-router-dom"
import { useContext } from "react"
import {AppContext} from "../context/appContext"
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863

// checkout / place order button

// read the cart in app context

const Checkout = function(props) {
    const [value, error, bindform, clearInput] = useInputOnchange("Enter your delivery address")
<<<<<<< HEAD
    const [isAuthenticated] = useAuth();
    const location = useLocation();
    const appContext = useContext(AppContext);
    const [cart] = useCart()
    //const [req, setReq] = useState(null);
    // const processOrderResponse = (res, status) => {
    //     console.log(status)
    //     if(res.ok) {
    //         if(res.status === 200) {
    //             appContext.cartContext.cartDispatch({type:"emptyCart"})
    //         }
    //     }
    // }

    //useFetch(req, processOrderResponse, [req]);
    if(!isAuthenticated) {
        console.log(location)
        return <Redirect to={{pathname: "/login", state: {from: location}}}/>
    }

    const checkout = function (){
        // process cart in backevd and expect result
        const requestUrl = `${config.hadeiny_BACKENDURL}/api/v1/orders/save`;
        const body = JSON.stringify(cart)
        const options = {
            "method": "POST",
            "body": body,
            "headers": {'Content-Type': 'application/json'}
        }
        fetch(requestUrl, options).then(res => {
            if(res.ok) {
                if(res.status === 200) {
                    appContext.cartContext.cartDispatch({type:"emptyCart"})
                }
            }
        })
        
        //we believed the order or the arrangement here matters that the callback should be initialized before triggering the request
        //setCallback(sendOrders);
        // setReq(request);
    }


=======
    const appContext = useContext(AppContext);
    console.log(JSON.stringify(bindform))
    const checkout = function (){
        appContext.cartContext.cartDispatch({type:"emptyCart"})
    }
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
    return (
        <div className="checkout">
            <p>Please, supply the address to forward your orders</p>
            <form className="card-shadowed">
                <div className="label-input-group">
                    <label>Delivery Address</label>
                    <input className="input-medium" {...bindform} />
                </div>
<<<<<<< HEAD
                <Link to={"/thank-you-for-your-order"}>
=======
                <Link to="/thank-you-for-your-order">
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
                    <button className="checkout-btn" onClick={checkout.bind(this)}>Checkout</button>
                </Link>
            </form>
        </div>
    )
}

export default Checkout
