// signup functionalities
// signup form
<<<<<<< HEAD

import { useEffect, useState } from "react";
import { Redirect, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useInput } from "../hooks/useInputOnchange"
import config from "../../config"
import "./authNav.css"

    // name, email, phone, password ... others to come
    const Signup = function(){
        const {state} = useLocation();
        const {from} = state || {from: {pathname: "/"}}
        const [firstname, fname_err, fname_bind, fname_actions] = useInput("firstname")
        const [lastname, lname_err, lname_bind, lname_actions] = useInput("lastname")
        const [email, email_err, email_bind, email_actions] = useInput("email")
        const [phone, phone_err, phone_bind, phone_actions] = useInput("phone")
        const [password, pword_err, pword_bind, pword_actions] = useInput("password", "password", "")
        const [cpword, cpword_err, cpword_bind, cpword_actions] = useInput("confirm-password", "password", "")
        const inputBinds = [fname_bind, lname_bind, email_bind, phone_bind, pword_bind, cpword_bind]
        const errors = [fname_err, lname_err, email_err, phone_err, pword_err, cpword_err]
        const [isAuthenticated, , , setUser] = useAuth()
        const [requestUrl, setRequestUrl] = useState(null);


        useEffect(() => {
            const sendUserDetailsToServer = async function(){
                if(requestUrl) {
                    const body = {
                        firstname,
                        lastname,
                        email,
                        phone,
                        password
                    }
                    
                    const options = {
                        "method": "POST",
                        "body": JSON.stringify(body),
                        "headers": {"Content-Type": "application/json"}
                    }
                    const result = await fetch(requestUrl, options)
                    if(result.ok) {
                        try {
                            const responseBody = await result.json();
                            let userData = JSON.parse(responseBody);
                            setUser(userData.user, userData.token);
                            return setRequestUrl(null);
                        } catch (error) {
                            //todo: handle err
                            console.log(error)
                            setRequestUrl(null);
                        }

                    }
                    else 
                        setRequestUrl(null);
                }
            }
            sendUserDetailsToServer();
        }, [requestUrl])

        const submit = (e) => {
            e.preventDefault();

            //#region
            // todo check all errors before proceeding
            /* 
            // set business rules to verify input values against
            for ex
            {
                "value must be less greater than 4": (value) => {
                    if(value.length < 4) seterror(error)
                }
            }
            we can now call a for each against the business rules
            */
           //#endregion
           let passed = true;
            errors.forEach(e => {
                // if at least one error exist then passed will be false
                if(e) passed = false;
            })
            // check password match
            passed = password === cpword
            passed && setRequestUrl(`${config.hadeiny_BACKENDURL}/api/v1/auth/signup`);
        }
        if(isAuthenticated) {
            return <Redirect to={from} />
        }

        return(
            <div className="authNav-container">
               <div className="card-shadowed">
                <div className="opening-brief"><p>Please, enter your details</p></div>
                <form onSubmit={(e) => {submit(e)}} className="form-primary">
                    {inputBinds.map((i_bind, index, T) => {
                        return (
                        <div key={index + i_bind["name"]} className="label-input-group">
                            <label>{i_bind.name}</label>
                            <input 
                            // We are using this to manage our error handling process
                            onBlur={() => {
                                if(!i_bind["value"]) {i_bind["seterror"]("this is an error")}}
                                 } 
                            onFocus={
                                () => {
                                    i_bind["seterror"]("")}
                               } {...i_bind} className="input-medium"/>
                        </div>
                        )
                    })}

                    {/* <div className="label-input-group">
=======
    // name, email, phone, password ... others to come
    const Signup = function(){
        return(
            <div className="card-shadowed">
                <div className="opening-brief"><p>Please, enter your details</p></div>
                <form className="form-primary">
                    <div className="label-input-group">
                        <label>First Name</label>
                        <input className="input-medium"/>
                    </div>
                    <div className="label-input-group">
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
                        <label>Last Name</label>
                        <input className="input-medium"/>
                    </div >
                    <div className="label-input-group">
                        <label>Email</label>
                        <input className="input-medium"/>
                    </div>

                    <div className="label-input-group">
                        <label>Phone</label>
                        <input className="input-medium"/>
                    </div>
                    <div className="label-input-group">
                        <label>Password</label>
                        <input className="input-medium"/>
                    </div>
                    <div className="label-input-group">
                        <label>Confirm Password</label>
                        <input className="input-medium"/>
<<<<<<< HEAD
                    </div> */}
                    <button className="btn-primary">Signup</button>
                </form>
            </div>
            </div>

=======
                    </div>
                    <button className="btn-primary">Signup</button>
                </form>
            </div>
>>>>>>> e56cbabb493771e3d5d00bdd1d6bec948820c863
        )
    }

    export default Signup
