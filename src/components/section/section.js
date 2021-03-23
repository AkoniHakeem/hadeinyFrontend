import React from "react"

const Section = function(props) {
    
    return(
        <React.Fragment>
            <h2>{props.name}</h2>
            {props.children}
        </React.Fragment>
    )
}

export default Section