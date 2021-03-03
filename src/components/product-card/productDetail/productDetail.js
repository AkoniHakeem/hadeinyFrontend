import './productDetail.css'
const ProductDetail = (props) => {
<<<<<<< HEAD
    // we need varying sizes to make resposive screen size
=======
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
    return(
        <div className="product-details">
            <label >{props.name}</label>
            <p >{props.description}</p>
            <label className="product-price"><span className="currency">N</span>{props.price}</label>
        </div>
        )
}

export default ProductDetail