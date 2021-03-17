import './productDetail.css'
const ProductDetail = (props) => {
    // we need varying sizes to make resposive screen size
    return(
        <div className={props.style || "product-details-1"}>
            <label >{props.name}</label>
            <p >{props.description}</p>
            <label className="product-price"><span className="currency">N</span>{props.price}</label>
        </div>
        )
}

export default ProductDetail