function UserReducer(user, action) {
    const user_reducer = {
        setUser(){
            let _user = action.payload.user 
            return {
                ..._user,
                token: action.payload.token
                // _id: _user._id,
                // firstname: _user.firstname,
                // lastname: _user.lastname
            }
        },
        updateUser(){
            let _user = action.payload.user 
            let existingDetails = JSON.stringify(JSON.parse(user));

            return {
                ...user, 
                firstname: _user.firstname,
                lastname: _user.lastname
            }
        },

        removeUser() {
            return {
                _id: 0
            }
        }
    }
    return user_reducer[action.type]()||user_reducer.default(); 
}

export default UserReducer;