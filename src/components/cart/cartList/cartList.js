import { useContext, useState } from "react"
import {getArray} from "../../helpers"
import {AppContext} from "../../context/appContext"

const CartList = function(props) {
    const [quantitySelected, setQuantitySelected] = useState(0)
    const cartContext = useContext(AppContext).cartContext;
    const quantityArray = getArray(props.productObject.product.quantity, 12)
    const optionsArray = [] 
    for(const i of quantityArray ) {
        if (i === 10) {
            optionsArray.push(<option key={i} value={i}>{i}+</option>)
            break;
        }
        optionsArray.push(<option key={i} value={i}>{i}</option>)
    }
    const updateCart = (e) => {
        setQuantitySelected(Number(e.target.value)); 
        cartContext.cartDispatch({type: "updateCart", payload: {count: Number(e.target.value), product: props.productObject.product}})
    }
    return (
    <li key={props.productObject.product._id} className="cart-list-item-row">
        <img className="cart-img"  src={`${props.productObject.product.imageLocation}`} alt={props.productObject.product.name}/>
        <label>{props.productObject.product.name}</label>
        <select value={quantitySelected > 0 ? quantitySelected : props.productObject.quantity} onChange={updateCart.bind(this)}>
            {
                [...optionsArray]
        }
        </select>
        <label><strong>N</strong>{Number(props.productObject.product.price) * Number(props.productObject.quantity)}</label>
    </li>
    )
}

export default CartList