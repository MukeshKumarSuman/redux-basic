import * as Constants from '../constants';

const intialState = {
    counter: 0,
    name: 'Mukesh'
}
const reducer = (state = intialState, action) => {
    switch (action.type) {
        case Constants.INCREMENT: return {...state, counter: state.counter + 1}
        case Constants.DECREMENT: return {...state, counter: state.counter - 1}
        case Constants.SUBTRACT: return {...state, counter: state.counter - action.value}
        case Constants.ADD: return {...state, counter: state.counter + action.value}
        case Constants.MULTIPLY: return {...state, counter: state.counter * action.value}
        default: return state;
    }
}
export default reducer;