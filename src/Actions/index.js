const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

export function addUser(user) {
    return {
        type: ADD_USER,
        payload: user
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function deleteUser(id) {
    return {
        type: DELETE_USER,
        payload: id
    }
}