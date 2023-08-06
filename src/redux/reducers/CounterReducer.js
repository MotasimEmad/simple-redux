import { INCREMENT, DECREMENT, INC_BY_VALUE } from "../actions/types";

const CounterReducer = (state = {count: 0}, action) => {
    switch(action.type) {
        case INCREMENT:
            return {...state, count: state.CounterReducer.count + 1};
        case DECREMENT:
            return {...state, count: state.CounterReducer.count - 1};
        case INC_BY_VALUE:
            return {...state, count: state.CounterReducer.count + 5};
        default:
            return state;
    }
}

export default CounterReducer;