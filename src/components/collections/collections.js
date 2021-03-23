import "./collections.css"
import React from "react";
import { Link} from "react-router-dom";


const Collection = (props) => {
    
    // we are going to be loading available collections from the back end

       return(
        <div >
            <div className="collection">
            <button className="collectionCircle"> 
                <Link to={`/${props.name}`} >
                    <img className="collectionImg" src={props.imageUrl} alt={props.name}/>
                </Link>
                </button>
                <label className="collectionName">{props.name}</label>
            </div>
            
        </div>
    )
}

export default Collection