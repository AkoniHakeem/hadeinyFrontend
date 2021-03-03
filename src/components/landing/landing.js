//import react from 'react';
import './landing.css';
import MainContent from '../main-content/main-content'
import SideBar from '../sideBar/sideBar';
import {useRef} from 'react'
import AuthNav from '../authNav/authNav';
import Cart from '../cart/cart';
import React from "react";
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863

const Page = (props) => {
        const sideBarRef = useRef();
        const openSideBar = (e) => {
            sideBarRef.current.open();
        }
    return(
        <div className="container">
            <nav className="nav-bar">
                <button className="menu-bars"  onClick={openSideBar}>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                    <div className="menu-bar"></div>
                </button>
                <div>
<<<<<<< HEAD
                    <Link className="link-to" to="/" ><h3 className="company-name">hadeiny</h3></Link>
=======
                    <h3 className="company-name">hadeiny</h3>
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
                </div>
                <div className="nav-actions">
                    <AuthNav/>
                    <Cart size="mini"/>
                </div>

                <div className={`side-bar-container`}>
                    <SideBar ref={sideBarRef}/>
                </div>
            </nav>
            <div className="banner"></div>
            <div className="main-content-wrapper"><MainContent /></div>
            <div className="footer">
<<<<<<< HEAD
                <div><p>&copy;2021&nbsp;<Link to="/">hadeiny</Link></p></div>
=======
                <div><p>hadeiny</p></div>
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
            </div>
        </div>
    )
} 

export default Page;