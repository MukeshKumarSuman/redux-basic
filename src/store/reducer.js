import * as Constants from './constants';
const intialState = {
    counter: 0,
    results: []
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case Constants.INCREMENT: return {...state, counter: state.counter + 1}
        case Constants.DECREMENT: return {...state, counter: state.counter - 1}
        case Constants.SUBTRACT: return {...state, counter: state.counter - action.value}
        case Constants.ADD: return {...state, counter: state.counter + action.value}
        case Constants.MULTIPLY: return {...state, counter: state.counter * action.value}
        // push will change the orignal arry but concat will gives a new array.
        case Constants.STORE_RESULT: return {...state, results: state.results.concat({id: new Date(), value:state.counter})}
        case Constants.DELETE_RESULT: return {...state, results: state.results.filter(result => result.id !== action.id)} 
        default: return state;
    }
}

export default reducer;