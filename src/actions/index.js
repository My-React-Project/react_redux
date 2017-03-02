export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function decrement() {
    return {
        type: DECREMENT
    };
}

export function setDiff(value) {
    return {
        type: SET_DIFF,
        diff: value
    };
}

/*
    한번에 모든 module을 export 할 수 있음.
    export { INCREMENT, DECREMENT, SET_DIFF, increment, decrement, setDiff }
*/
