import { createStore } from 'redux';
import userReducer from '../Reducers';

let initialState = [
        {
            id:1,
            name: "Mahesh",
            email: "mahesh@gmail.com",
            mobile: "9988774455"
        },
        {
            id:2,
            name: "Raadha",
            email: "raadha@gmail.com",
            mobile: "9966885544"
        }
];

// in local storage
if(localStorage.getItem("users") === null) {
    //if empty store the data
    localStorage.setItem("users", JSON.stringify(initialState));
} else {
    // return the data
    initialState = JSON.parse(localStorage.getItem("users"));
}

const store = createStore(userReducer,initialState);

export { store };