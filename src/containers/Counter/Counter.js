import React, { Component } from 'react';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import { connect } from 'react-redux';
//import { increment, decrement, add, subtract, multiply } from '../../store/actions';
import * as actionCreators from '../../store/actions';
import './Counter.css';
class Counter extends Component {
    state = {
        inputValue: 0
    }
    render() {
        return(
            <div>
                <CounterOutput value={this.props.ctr} />
                <input type="text" value={this.state.inputValue} onChange={ event => this.setState({inputValue: parseInt(event.target.value)})}/>
                <CounterControl label="Icrement" clicked={this.props.increment}/>
                <CounterControl label="Add" clicked={() => this.props.add(this.state.inputValue)}/>
                <CounterControl label="Add 10" clicked={() => this.props.add(10)}/>
                <CounterControl label="Decrement" clicked={this.props.decrement}/>
                <CounterControl label="Subtract" clicked={() => this.props.subtract(this.state.inputValue)}/>
                <CounterControl label="Subtract 10" clicked={() => this.props.subtract(10)}/>
                <CounterControl label="Multiply" clicked={() => this.props.multiply(this.state.inputValue)}/>
                <CounterControl label="Multiply by 10" clicked={() => this.props.multiply(10)}/>
                <hr/>
                <button onClick={() => this.props.storeResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.deleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    }
}
//const mapDispatcchToProps = {increment, decrement, add, subtract, multiply};
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(actionCreators.increment()),
        decrement: () => dispatch(actionCreators.decrement()),
        add: (value) => dispatch(actionCreators.add(value)),
        subtract: (value) => dispatch(actionCreators.subtract(value)),
        multiply: (value) => dispatch(actionCreators.multiply(value)),
        storeResult: (result) => dispatch(actionCreators.storeResult(result)),
        deleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);