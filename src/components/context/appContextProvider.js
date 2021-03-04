import { useLocalStorageState } from "ahooks";
import { useEffect, useReducer, useState } from "react";
import CartReducer from "../Reducers/cartReducer";
import { AppContext } from "./appContext";
import UserReducer from "../Reducers/userReducer"
const AppContextProvider = function (props){
    const cart_id = Date.now();
    const [user, setUser] = useLocalStorageState("userData", {_id: 0, firstname: "", lastname: "", token: ""})
    const [cart, setCart] = useLocalStorageState("cart", {cart_id: cart_id, user_id: user.id, count: 0,items: []});
    const [_cart, cartDispatch] = useReducer(CartReducer, cart);
    const [_user, userDispatch] = useReducer(UserReducer, user);
    useEffect(() => {
        setCart({..._cart, user_id: _user.id});
        setUser(_user)
    }, [_cart, _user])
    return(
        <AppContext.Provider
        value={
            {
                cartContext: {
                    cart: {...cart},
                    cartDispatch
                },

                userContext: {
                    user: {..._user},
                    userDispatch
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