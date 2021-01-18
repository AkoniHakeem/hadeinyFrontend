import { useLocalStorageState } from "ahooks";
import { useEffect, useReducer, useState } from "react";
import CartReducer from "../Reducers/cartReducer";
import { AppContext } from "./appContext";

const AppContextProvider = function (props){
    const cart_id = Date.now();
    const [cart, setCart] = useLocalStorageState("cart", {cart_id: cart_id, count: 0,items: []})
    const [_cart, cartDispatch] = useReducer(CartReducer, cart);
    useEffect(() => {
        setCart(_cart);
    }, [_cart])
    return(
        <AppContext.Provider
        value={
            {
                cartContext: {
                    cart: {...cart},
                    cartDispatch
                },
                
                eventContext: {}

            }
        }
        >
            {props.children}
        </AppContext.Provider>
    )
}



export default AppContextProvider;