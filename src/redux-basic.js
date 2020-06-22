const redux = require('redux');
const createStore = redux.createStore;

// Reducer
const initialstate = {
    counter: 0
}
const rootReducer = (state = initialstate, action) => {
    switch(action.type) {
        case 'INC_COUNTER': {
            return {...state, counter: state.counter + 1};
        }
        case 'ADD_COUNTER': {
            return {...state, counter: state.counter + action.value}
        }
        default: {
            return {...state};
        }
    }
}

// store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    // execute on state update
    console.log('[Subscription] ', store.getState());
});

// Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});
console.log(store.getState());

