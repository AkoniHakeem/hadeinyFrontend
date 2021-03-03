import { useState } from "react"
import { useParams } from "react-router-dom"
import useFetch from "../../hooks/useFetchFrom"
import config from '../../../config'
import ProductActions from "../../product-card/productActions/productActons"
import ProductDetail from "../../product-card/productDetail/productDetail"
import "./productDetailsPage.css"
import { getArray } from "../../helpers"
import useScreenSize from "../../hooks/useScreenSize"
const ProductDetailsPage = function () {
    const {productName, productId}= useParams();
    const [product, setproduct] = useState({})
    const screenSize = useScreenSize();// listens to the screen sizes
    const requestUrl = `${config.hadeiny_BACKENDURL}/api/v1/products/one/${productId}`
    const options = {
        method:"GET"
    }
    useFetch(requestUrl, options, (product) => {
        setproduct(product);
    }, [])
    return(
        <div className="product-details-page-container" data-productdetailscontainer={screenSize}>
            <div>
                <img className="details-image" src={product.imageLocation} alt={productName}></img>
            </div>
            <div className="details-area">
                <ProductDetail name={product.name} 
                price={product.price} 
                description={product.description}/>
                <div className="product-action-style" data-product-action-style="small"> 
                    <ProductActions product={product} quantityArray={getArray(product.quantity, 10)}/>
                 </div>
            </div>
            {/* more details area */}
            <div className="more-details-area">

            </div>
        </div>
    )
}
export default ProductDetailsPage