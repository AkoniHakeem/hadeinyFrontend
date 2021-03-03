import { useLocalStorageState } from "ahooks";
import { useEffect, useReducer, useState } from "react";
import CartReducer from "../Reducers/cartReducer";
import { AppContext } from "./appContext";
<<<<<<< HEAD
import UserReducer from "../Reducers/userReducer"
const AppContextProvider = function (props){
    const cart_id = Date.now();
    const [user, setUser] = useLocalStorageState("userData", {id: 0, firstname: "", lastname: "", token: ""})
    const [cart, setCart] = useLocalStorageState("cart", {cart_id: cart_id, user_id: user.id, count: 0,items: []});
    const [_cart, cartDispatch] = useReducer(CartReducer, cart);
    const [_user, userDispatch] = useReducer(UserReducer, user);
    useEffect(() => {
        setCart({..._cart, user_id: _user.id});
        setUser(_user)
    }, [_cart, _user])
=======

const AppContextProvider = function (props){
    const cart_id = Date.now();
    const [cart, setCart] = useLocalStorageState("cart", {cart_id: cart_id, count: 0,items: []})
    const [_cart, cartDispatch] = useReducer(CartReducer, cart);
    useEffect(() => {
        setCart(_cart);
    }, [_cart])
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
    return(
        <AppContext.Provider
        value={
            {
                cartContext: {
                    cart: {...cart},
                    cartDispatch
                },
<<<<<<< HEAD

                userContext: {
                    user: {..._user},
                    userDispatch
                },
=======
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
                
                eventContext: {}

            }
        }
        >
            {props.children}
        </AppContext.Provider>
    )
}



export default AppContextProvider;