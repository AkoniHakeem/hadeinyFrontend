import { useContext } from "react"
import { AppContext } from "../context/appContext"

export function useAuth () {
    const userContext = useContext(AppContext).userContext;
    const user = userContext.user
    const isAuthenticated = user._id === 0 ? false : true;
    const setUser = (_user, token) => {
        userContext.userDispatch({type: "setUser", payload: {user: _user, token: token}})
    }

    const removeUser = () => {
        userContext.userDispatch({type: "removeUser"})
    }
        // implement later on
    const isAuthorized = true;
    const auth = [isAuthenticated, isAuthorized, user, setUser, removeUser]
    return  auth;
}

export default useAuth;