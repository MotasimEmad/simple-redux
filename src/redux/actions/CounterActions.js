import { INCREMENT, DECREMENT, INC_BY_VALUE } from './types';

export const IncrementCounter = async(dispatch) => {
    return dispatch({
        type: INCREMENT
    });
}

export const DecrementCounter = async(dispatch) => {
    return dispatch({
        type: DECREMENT
    });
}

export const IncrementByValueCounter = async(dispatch) => {
    return dispatch({
        type: INC_BY_VALUE
    });
}