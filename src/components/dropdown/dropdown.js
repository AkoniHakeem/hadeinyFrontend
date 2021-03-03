const Dropdown = function (props) {

    return(
        <>
            <span className="caret"></span>
            <ul className="menu">
                {props.children}
            </ul>
        </>
    )
}

export default Dropdown