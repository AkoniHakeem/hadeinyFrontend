import './main-content.css'
import { useState } from 'react'
import Collection from '../collections/collections'
import useFetch from '../hooks/useFetchFrom'
import { Route, Switch } from 'react-router-dom'
import CollectionPage from '../collections/collectionPage'
import ProductDetailsPage from '../collections/productDetailsPage/productDetailsPage'
import config from '../../config'
import Cart from '../cart/cart'
import Checkout from '../cart/checkout'
import Thanks from '../cart/thanks'
import Signup from '../authNav/signup'
import Login from '../authNav/login'
import AddProduct from '../addProduct/addProduct'


const MainContent = (props) => {
    let requestUrl = config.hadeiny_BACKENDURL+"/api/v1/collections"
    const options = {
        method: "GET"
    }
    const [collections, setCollections] = useState([])
        useFetch(requestUrl, options, (_collections) => {
            console.log(_collections)
            setCollections(_collections)
        })

    return(
        <div className="main-content">

            <Switch>
                <Route exact path="/">
                    <div className="carousel">
                        <div className="carousel-wrapper">
                            <div className="slide">
                                <img  src="/banner1.jpg"/>
                            </div>
                            <div className="slide">
                                <img  src="/banner3.jpg"/>
                            </div>                   
                             <div className="slide">
                                <img src="/banner6.jpg"/>
                            </div>
                        </div>
                    </div>
                    <div className="collection-wrapper">
                        <div className="collection-header-wrapper">
                            <h3 className="collection-header">Collections</h3>
                        </div>
                        <div className="collection-list-wrapper">
                            {collections.map(c => {
                            return <Collection key={c._id} name={c.name} imageUrl={c.image}/>})
                            }
                        </div>
                    </div>
                </Route>
                {collections.map(c => {
                    return <Route exact key={c._id} path={`/${c.name}`}><CollectionPage/></Route>})}
                {
                    collections.map(
                        c => {
                            return <Route exact key={c._id+`${c.name}`} path={`/${c.name}/:productName/:productId`}>
                                    <ProductDetailsPage />
                            </Route>
                        }
                    )
                }
                <Route path="/cart">
                    <Cart size="big"/>
                </Route>
                <Route path="/checkout">
                    <Checkout/>
                </Route>
                <Route path="/thank-you-for-your-order">
                    <Thanks/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/my-store/add-product">
                    <AddProduct/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainContent