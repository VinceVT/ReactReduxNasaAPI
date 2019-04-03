

export default function (state = {}, action) {
    //reducers will always have 2 arguments: state and an action that was done
    //reducers will always return the next state
    switch(action.type) {
        case 'FETCH_DATA':
            const newState = Object.assign({}, ...state, action.payload.data);
            return newState;
        default:
            return state;
    }
}