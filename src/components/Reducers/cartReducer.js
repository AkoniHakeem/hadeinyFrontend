
const CartReducer = function(cart, action) {
    console.log("reducer called with action - ", action.type)
    const reducerFunction = {
        addToCart(){
            console.log("cart initial ",cart)
            console.log("sent payload ",action.payload)
            let _cart;
             _cart = {
                ...cart, 
                count: cart.count + Number(action.payload.count), // I would need to update this to the count of each single product
                // we are updating the object values that has changed, 
                //this is esssential so react is able to track what has changed
                items: cart.items.find(prod => prod.product._id === action.payload.product._id) ? 
                (()=> {
                    const cartItems = {...cart}.items; 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity =  Number(productObj.quantity) + Number(action.payload.count) 
                    return [...cartItems];
                })() 
                : 
                (()=>{
                    const cartItems = {...cart}.items
                    cartItems.push({product: action.payload.product, quantity: action.payload.count});
                    return cart.items
                })()
            }
            console.log("cart later", _cart);
            return _cart;

            // we have got a new copy of cart context, we can do stuff with it

        },

        updateCart(){
            console.log("cart initial ",cart)
            console.log("sent payload ",action.payload)
            let _cart;
             _cart = {
                ...cart, 
                count: (() => {
                    const productsInCart = cart.items.find(prodObject => prodObject.product._id === action.payload.product._id);
                    if(productsInCart) {
                        let cartCount = {...cart}.count
                        cartCount = cartCount - productsInCart.quantity + Number(action.payload.count)
                        if (cartCount < 0) {
                            cartCount = 0;
                        }
                        return cartCount
                    }
                    else {
                        return cart.count + Number(action.payload.count);
                    }
                })(), // I would need to update this to the count of each single product
                // we are updating the object values that has changed, 
                //this is esssential so react is able to track what has changed
                items:
                (()=> {
                    const cartItems = {...cart}.items; 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity = Number(action.payload.count) 
                    return [...cartItems];
                })() 
            }
            console.log("cart later", _cart);
            return _cart;

        },

        removeFromCart(){
            console.log("cart initial ",cart)
            console.log("sent payload ",action.payload)
            let _cart;
             _cart = {
                ...cart, 
                count: (() => {
                    let cartCount = cart.count - Number(action.payload.count)
                    cartCount = cartCount <= 0 ? 0 : cartCount 
                    return cartCount;
                })(),
                items:
                (()=> {
                    let cartItems = {...cart}.items;
                    if(cartItems)  {
                        let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                        if(productObj && productObj.quantity > 0) {
                            productObj.quantity =  Number(productObj.quantity) - Number(action.payload.count);
                        }
                        if(productObj && productObj.quantity === 0) {
                            //const itemIndex = cartItems.findIndex(prodObject => prodObject.product._id === action.payload.product._id);
                            const cartItemsFiltered = cartItems.filter((prodObject => prodObject.product._id !== action.payload.product._id))
                            cartItems = cartItemsFiltered
                        }
                        console.log("cartItems logged", cartItems)
                        return [...cartItems];
                    }
                })() 
            }
            console.log("cart later", _cart);
            return _cart;
        },

        emptyCart(){
            localStorage.removeItem("cart");
            return {
                count: 0,
                items: []
            }
        },

        default() {
            console.log("default called")
            return {
                ...cart
            }
        }
    }
    return reducerFunction[action.type]() || reducerFunction["default"]();

}

export default CartReducer