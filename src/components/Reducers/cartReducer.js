
const CartReducer = function(cart, action) {
    const cart_reducer = {
        addToCart(){
            
             let _cart = {
                ...cart, 
                cart_id: cart.cart_id === 0 ? Date.now() : cart.cart_id,
                count: cart.count + Number(action.payload.count), 
                items: cart.items.find(prod => prod.product._id === action.payload.product._id) ? 
                (()=> {
                    const cartItems = JSON.parse(JSON.stringify(cart.items)); 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity =  Number(productObj.quantity) + Number(action.payload.count) 
                    return [...cartItems];
                })() 
                : 
                (()=>{
                    const cartItems = JSON.parse(JSON.stringify(cart.items))
                    cartItems.push({product: action.payload.product, quantity: action.payload.count});
                    return cartItems
                })()
            }
            return _cart;
        },

        updateCart(){
            let _cart;
             _cart = {
                ...cart, 
                count: (() => {
                    const productsInCart = JSON.parse(JSON.stringify(cart.items)).find(prodObject => prodObject.product._id === action.payload.product._id);
                    if(productsInCart) {
                        let cartCount = JSON.parse(JSON.stringify(cart)).count
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
                    const cartItems = JSON.parse(JSON.stringify(cart.items)) 
                    let productObj = cartItems.find(prodObject => prodObject.product._id === action.payload.product._id);
                    productObj.quantity = Number(action.payload.count) 
                    return cartItems;
                })() 
            }
            return _cart;

        },

        removeFromCart(){
            
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
            return _cart;
        },

        emptyCart(){
            localStorage.removeItem("cart");
            return {
                cart_id: 0,
                user_id: 0,
                count: 0,
                items: []
            }
        },

        default() {
            return {
                ...cart
            }
        }
    }
    return cart_reducer[action.type]() || cart_reducer["default"]();

}

export default CartReducer