const userReducer = (state=[], action) => {
    switch (action.type) {
        case "ADD_USER":
        let tempState = [...state, action.payload];
        localStorage.setItem("users", JSON.stringify(tempState));
        return tempState;

        case "UPDATE_USER":
            let tempState1 = state.map((user) => {
                const { id,name,email,mobile } = action.payload;
                console.log('update payload =', action.payload);
                if(user.id == id) {
                    user.name = name;
                    user.email = email;
                    user.mobile = mobile;
                }
                return user;
            });
            localStorage.setItem("users",JSON.stringify(tempState1));
            return tempState1;

        case "DELETE_USER":
            let tempState2 = state.filter((x) => x.id !== action.payload);
            localStorage.setItem("users", JSON.stringify(tempState2));
            return tempState2;

        default: 
        return state;
    }
}

export default userReducer;