import { Link, Redirect, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth";
import useInputOnchange from "../hooks/useInputOnchange";
import config from "../../config"
import { useEffect, useState } from "react";

const Login = function() {
    const {state} = useLocation();
    const {from} = state || {from: {pathname: "/"}}
    const [isAuthenticated, , , setUser] = useAuth();
    const [email, phoneError, bindPhone, clearEmail] = useInputOnchange("Please, Enter your email")
    const [password, passwordError, bindPassword, clearPassword] = useInputOnchange("Please, Supply your password")
    const [requestUrl, setRequestUrl] = useState(null)
    const clearInputs = (clearInputsFunctions) => {
        clearInputsFunctions.forEach(func => {
            func()
        })
    }
    useEffect(() => {
        const authUserWithServer = async () => {
            const body = {
                email,
                password
            }
            const options = {
                "method": "POST",
                "body": JSON.stringify(body),
                "headers": {"Content-Type": "application/json"}
            }
            if(requestUrl) {
                const result = await fetch(requestUrl, options);
                if(result.ok) {
                    const responseBody = await result.json();
                    if(responseBody) {
                        let userData = JSON.parse(responseBody);
                        setUser(userData.user, userData.token)
                        clearInputs([clearEmail, clearPassword])
                        setRequestUrl(null)
                    }
                }
                else {
                    setRequestUrl(null)
                }
            }
        } 
        authUserWithServer();
    }, [requestUrl])

    
    const authenticate = async (e) => {
        e.preventDefault()
        // todo: implement authentication with backend 
        setRequestUrl(`${config.hadeiny_BACKENDURL}/api/v1/auth/login`);

    } 

    if(isAuthenticated) {
        return <Redirect to={from}/>
    }
    return(
        <div className="authNav-container">
                    <div className="card-shadowed">
            <div className="opening-brief"><p>Please, enter your login details, or signup <Link to="/signup">here</Link></p></div>
            <form onSubmit={ authenticate.bind(this)} className="form-primary">
                <div>
                    <label>Email</label>
                    <input {...bindPhone}/>
                </div>
                <div>
                    <label>Password</label>
                    <input {...bindPassword} type="password"/>
                </div>
                <button className="btn-primary">Login</button>
            </form>
        </div>
        </div>
    )
}

export default Login