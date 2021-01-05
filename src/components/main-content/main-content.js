import './main-content.css'
import { useState } from 'react'
import Collection from '../collections/collections'
import useFetch from '../useFetchFrom'
import { Route, Switch } from 'react-router-dom'
import CollectionPage from '../collections/collectionPage'
import ProductDetailsPage from '../collections/productDetailsPage/productDetailsPage'
import config from '../../config'
import Cart from '../cart/cart'

const MainContent = (props) => {
    let requestUrl = config.backendUrl+"/api/v1/collections"
    const request = new Request(requestUrl, {
        method: "GET"
    })
    const [collections, setCollections] = useState([])
        useFetch(request, (_collections) => {
            console.log(_collections)
            setCollections(_collections)
        })


    return(
        <div className="main-content">
            <Switch>
                <Route exact path="/">
                    {collections.map(c => {
                    return <Collection key={c._id} name={c.name} imageUrl={c.image}/>})}
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
            </Switch>
        </div>
    )
}

export default MainContent