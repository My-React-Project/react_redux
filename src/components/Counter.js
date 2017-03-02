import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <h1>VALUE: {this.props.value}</h1>
        );
    }
}

// function mapStateToProps(state) {
//     return { value : state.counter.value };
// }
let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

Counter = connect(mapStateToProps)(Counter);

export default Counter;
