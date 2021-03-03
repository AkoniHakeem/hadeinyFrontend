import { useEventEmitter, usePersistFn, useTitle } from "ahooks";
import React, { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import config from '../../config'
<<<<<<< HEAD
import useFetch from "../hooks/useFetchFrom";
import ProductCard  from "../product-card/productCard";
import "./collectionPage.css"
=======
import useFetch from "../useFetchFrom";
const { default: ProductCard } = require("../product-card/productCard");
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863


const CollectionPage = (props) => {
    let {path} = useRouteMatch();
    useTitle(`${path.substring(1)} - hadeiny`, {restoreOnUnmount: true});
    const productLoaded = useEventEmitter();
    let requestUrl = `${config.hadeiny_BACKENDURL}/api/v1/products/${path}`
<<<<<<< HEAD
    const options = {
        method: "GET"
    }

    const [products, setProducts] = useState([])

    useFetch(requestUrl, options, (_products) => {
=======
    const request = new Request(requestUrl, {
        method: "GET"
    })

    const [products, setProducts] = useState([])

    useFetch(request, (_products) => {
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
        setProducts(_products)
    })
    // const commune = useCommune("click-event");
    // const onAddToCartClicked = (quantity) => {
    //     console.log("add to cart clicked with the quantity - ", quantity)
    // }
    return(
<<<<<<< HEAD
        <div className="product-container">
=======
        <div className="main-content">
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            {products.map(prod => {
                //commune.subscribe(onAddToCartClicked);
                return <ProductCard product={prod} productImage={prod.imageLocation} key={prod._id} productName={prod.name} productId={prod._id} productDescription={prod.description} productPrice={prod.price}/>
            })}
        </div>
    )
}
export default CollectionPage