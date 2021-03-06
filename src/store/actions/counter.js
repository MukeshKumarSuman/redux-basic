import * as Constants from '../constants';

export const increment = () => {
    return {
        type: Constants.INCREMENT
    }
}

export const decrement = () => {
    return {
        type: Constants.DECREMENT
    }
}

export const add = value => {
    return {
        type: Constants.ADD,
        value
    }
}

export const subtract = value => {
    return {
        type: Constants.SUBTRACT,
        value
    }
}

export const multiply = value => {
    return {
        type: Constants.MULTIPLY,
        value
    }
}




    