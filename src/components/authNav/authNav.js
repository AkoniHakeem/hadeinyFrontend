
import { useClickAway } from "ahooks";
import { useRef, useState } from "react";
import { Link } from "react-router-dom"
import { AppContext } from "../context/appContext"
import Dropdown from "../dropdown/dropdown";
import useAuth from "../hooks/useAuth";
import "./authNav.css"

const AuthNav = (props) => {
    const [isAuthenticated, isAuthorized, user, , removeUser] = useAuth();
    const [showMenu, setShowMenu] = useState(false)
    const clickAwayListener = useRef(null)
    useClickAway(() => {
        if(showMenu) {
            setShowMenu(false)
        }
    }, clickAwayListener)
    const logOut = (e) => {
        if(showMenu) {
            e.stopPropagation();
            removeUser();
            setShowMenu(false)
        }
    }
    return(
        <>
        {
        isAuthenticated ? 
        <button ref={clickAwayListener} className="auth-nav-button" onClick={(e) => {setShowMenu(true)}}>
            Hi, {user.firstname}
            {showMenu? 
            <Dropdown >
                <li ><Link to="/" onClick={(e) => {logOut(e)}}>Log Out</Link></li>
            </Dropdown> : ""
            }
        </button>:
            <>
                <Link to="/signup"> <button className="auth-nav-button">Sign Up</button></Link>
                <Link to="/login"><button className="auth-nav-button">Log In</button></Link>
            </>
        }
        </>
    )
}

export default AuthNav