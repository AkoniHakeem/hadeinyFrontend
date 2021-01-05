import "./collections.css"
import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";
const Collection = (props) => {
    // we are going to be loading available collections from the back end
       return(
        <div className="collection">
            <button className="collectionCircle"> 
            <Link to={`/${props.name}`} >
                <img className="collectionImg" src={props.imageUrl} alt={props.name}/>
            </Link>
            </button>
            <label className="collectionName">{props.name}</label>
            
        </div>
    )
}

export default Collection