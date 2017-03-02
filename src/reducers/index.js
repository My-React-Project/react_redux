/*
    import * as type from '../actions' 이와 같은 방식으로 import 할 수도 있음.
    사용 시 type.INCREMENT, type.SET_DIFF... 이런 식으로 사용
*/
import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
// combineReducers : 여러개의 reducer를 한개로 합칠 때 사용 되는 redux 내장 메소드
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

const extra = (state = {value: 'this_is_extra_reducer'}, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

/*
    combineReducer를 사용하지 않고 counterApp을 정의
    const counterApp = ( state = {}, action ) => {
        return {
            counter: counter(state.counter, action),
            extra: extra(state.extra, action)
        }
    }
*/
/*
    다른 key값으로 전달하고 싶은 경우
    const counterApp = combineReducers({
        a: counter,
        b: extra
    });
*/
const counterApp = combineReducers({
    counter, extra
});

/*
    만들어지게 되는 state 구조
    {
        counter: { value: 0, diff: 1 }
        extra: { value: 'this_is_extra_reducer' }
    }
*/
export default counterApp;
