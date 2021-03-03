import { useContext, useState } from 'react'
import { AppContext } from '../../context/appContext';
import './productActions.css'

const ProductActions = (props) => {
    const appContext = useContext(AppContext)
    const cartContext = appContext.cartContext;
    const cartDispatch = cartContext.cartDispatch;
    const [showAddRemoveButton, setShowAddRemoveButton] = useState(false);
    let [inputIsInEdit, setInputIsInEdit] = useState(false);
    let [userManualEntry, setUserManualEntry] = useState(1);
    const findInContext = function(productId) {
        return cartContext.cart.items.find(prodObject => prodObject.product._id === productId)
    }
    const productCartQuantity = findInContext(props.product._id)? findInContext(props.product._id).quantity : 0;
    const [inputType, setInputType] = useState("text");
    const addToCart = function () {
        if(productCartQuantity > 0) { // if this product exist in cart
<<<<<<< HEAD
            setShowAddRemoveButton(true);
            setInputType("button");
            setUserManualEntry(1);
=======
            setShowAddRemoveButton(true)
            setInputType("button");
            setUserManualEntry(1)
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            setInputIsInEdit(false);
            console.log(findInContext(props.product._id))
        }
        cartDispatch({type:"addToCart", payload:{count: userManualEntry, product: {...props.product}}})
    }

    const removeFromCart = function() {
        let quantityToRemove = userManualEntry;
        cartDispatch({type: "removeFromCart", payload: {count: quantityToRemove, product: {...props.product}}})
        setTimeout(() => {
            if(findInContext(props.product._id) && findInContext(props.product._id).quantity <= 0) {
                setShowAddRemoveButton(false)
            }
        }, 0);

    }
    
        
    return (

        <div>
            {
                showAddRemoveButton ? 
                <div>
                    <button onClick={removeFromCart.bind(this)}>-</button>
                    <input value={inputIsInEdit? userManualEntry : productCartQuantity } 
                    onClick={(e) => {setInputType("text"); setInputIsInEdit(true); setUserManualEntry(productCartQuantity)} } 
                    onChange={(e) => setUserManualEntry(e.target.value)} type={inputType}
                     />
                    <button onClick={addToCart.bind(this)}>+</button>
                </div> 
                :
                <div>
                    <button className="product-action-btn" onClick={addToCart.bind(this)}>
                        {productCartQuantity > 0 ? 
                    findInContext(props.product._id).quantity 
                    : 
                    "Add To Cart"}
                    </button>
                </div>
            }
        </div>
        // <div>
        //     {props.quantityArray? 
        //     <select onChange={(e) => setNewSelection(e)}>
        //         {props.quantityArray.map(
        //             (item, index) => {
        //                 return(
        //                     <option key={index} value={item}>{item}</option>
        //                 )
        //             }
        //         )}
        //     </select> : ''
        //     }
        //     <button className="product-action-btn" onClick={addToCart.bind(this)}>Add To Cart</button>
        // </div>
    )
}

export default ProductActions