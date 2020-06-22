import * as Constants from '../constants';

const intialState = {
    results: []
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        // push will change the orignal arry but concat will gives a new array.
        case Constants.STORE_RESULT: return {...state, results: state.results.concat({id: new Date(), value: action.result})}
        case Constants.DELETE_RESULT: return {...state, results: state.results.filter(result => result.id !== action.id)} 
        default: return state;
    }
}
export default reducer;