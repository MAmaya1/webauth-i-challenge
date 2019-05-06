// Set Intial State

const initialState = {
    loggingIn: false,
    loggedIn: false,
    logInErr: null,
    users: []
}

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default reducer;