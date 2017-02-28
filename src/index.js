import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// type 정의
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

/*
    Action
    어떤 변화가 일어나야 할 지 알려주는 객체
*/
function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}
function decrease(diff) {
    return {
        type: DECREMENT,
        addBy: diff
    };
}

/*
    Reducer
    action 객체를 받았을 때, 데이터를 어떻게 바꿀지 정의하는 객체
*/
const initialState = {
    value: 0
};
// 비구조화 할당을 이용하지 않고 일반적인 함수를 이용한 정의
// function counterReducer(state, action) {
//     state = state === undefined ? initialState : state;
//     switch(action.type) {
//         case INCREMENT:
//             return Object.assign({}, state, {
//                 value: state.value + action.addBy
//             });
//         default:
//             return state;
//     }
// }
const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - action.addBy
            });
        default:
            return state;
    }
}

/*
    Store
    프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 저장소
*/
const store = createStore(counterReducer);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    render() {
        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        };
        return (
            <div onClick={this.onClick} style={centerStyle}>
                <h1>{this.props.store.getState().value}</h1>
            </div>
        );
    }

    onClick() {
        /* dispatch : store의 상태값을 수정할 떄 사용하기 위한 메소드.
                      인자로 action 객체가 전달
        */
        this.props.store.dispatch(increase(1));
    }
}

const render = () => {
    const appElement = document.getElementById('app');
    ReactDOM.render(
        <App store={store}/>,
        appElement
    );
};

// 데이터 변동이 있을떄마다 리렌더링 하기 위한 설정
store.subscribe(render);
render();
