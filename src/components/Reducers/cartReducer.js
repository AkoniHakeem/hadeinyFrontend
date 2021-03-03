
const CartReducer = function(cart, action) {
<<<<<<< HEAD
    const cart_reducer = {
        addToCart(){
            
             let _cart = {
                ...cart, 
                cart_id: cart.cart_id === 0 ? Date.now() : cart.cart_id,
                count: cart.count + Number(action.payload.count), 
                items: cart.items.find(prod => prod.product._id === action.payload.product._id) ? 
                (()=> {
                    const cartItems = JSON.parse(JSON.stringify(cart.items)); 
=======
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
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity =  Number(productObj.quantity) + Number(action.payload.count) 
                    return [...cartItems];
                })() 
                : 
                (()=>{
<<<<<<< HEAD
                    const cartItems = JSON.parse(JSON.stringify(cart.items))
                    cartItems.push({product: action.payload.product, quantity: action.payload.count});
                    return cartItems
                })()
            }
            return _cart;
        },

        updateCart(){
=======
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
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            let _cart;
             _cart = {
                ...cart, 
                count: (() => {
<<<<<<< HEAD
                    const productsInCart = JSON.parse(JSON.stringify(cart.items)).find(prodObject => prodObject.product._id === action.payload.product._id);
                    if(productsInCart) {
                        let cartCount = JSON.parse(JSON.stringify(cart)).count
=======
                    const productsInCart = cart.items.find(prodObject => prodObject.product._id === action.payload.product._id);
                    if(productsInCart) {
                        let cartCount = {...cart}.count
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
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
<<<<<<< HEAD
                    const cartItems = JSON.parse(JSON.stringify(cart.items)) 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity = Number(action.payload.count) 
                    return cartItems;
                })() 
            }
=======
                    const cartItems = {...cart}.items; 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity = Number(action.payload.count) 
                    return [...cartItems];
                })() 
            }
            console.log("cart later", _cart);
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            return _cart;

        },

        removeFromCart(){
<<<<<<< HEAD
            
            const getItems = (cart)=> { 
                let cartItems = JSON.parse(JSON.stringify(cart.items));
                if(cartItems)  {
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    if(productObj) {
                        let currentProductQuantity = productObj.quantity
                        if(currentProductQuantity > 0) {
                            productObj.quantity =  Number(productObj.quantity) - Number(action.payload.count);
                            if(currentProductQuantity < 0) {
                                currentProductQuantity = 0;
                            }
                        }
                        if(currentProductQuantity === 0) {
                            const cartItemsFiltered = cartItems.filter((prodObject => prodObject.product._id !== action.payload.product._id))
                            cartItems = cartItemsFiltered
                        }
                        return [cartItems, currentProductQuantity];
                    }
                    return [cartItems, 0];
                }
            }

            const [updatedCartItems, currentProductQuantity]= getItems(cart);
             let _cart = {
                ...cart, 
                items:updatedCartItems,
                count: currentProductQuantity > 0 ? cart.count - Number(action.payload.count) : cart.count 
            }
=======
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
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            return _cart;
        },

        emptyCart(){
            localStorage.removeItem("cart");
            return {
<<<<<<< HEAD
                cart_id: 0,
                user_id: 0,
=======
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
                count: 0,
                items: []
            }
        },

        default() {
<<<<<<< HEAD
=======
            console.log("default called")
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            return {
                ...cart
            }
        }
    }
<<<<<<< HEAD
    return cart_reducer[action.type]() || cart_reducer["default"]();
=======
    return reducerFunction[action.type]() || reducerFunction["default"]();
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863

}

export default CartReducer