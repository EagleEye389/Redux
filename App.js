import React, { Component } from 'react';
import Action from './ActionType/actiontype';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
         <p>Checking things</p>
         <div>Counter value is  : {this.props.ctr}</div>
         <div>
             <input type="button" onClick={this.props.INC} value="increment"/>`
         </div>
      </div>
    );
  }
}

const mapSateToprops =(state) =>{
   return {
       ctr :  state.counter
   }
}
const mapDispatchToprops = (dispatch) =>{
   return {
       INC:()=>dispatch({type:Action.INCREMENT})
   }
}
export default connect(mapSateToprops,mapDispatchToprops)(App);
