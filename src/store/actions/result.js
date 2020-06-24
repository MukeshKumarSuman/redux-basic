import * as Constants from '../constants';

export const saveResult = result => {
    return {
        type: Constants.STORE_RESULT,
        result
    }
}

export const storeResult = result => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
}

export const deleteResult = id => {
    return {
        type: Constants.DELETE_RESULT,
        id
    }
}