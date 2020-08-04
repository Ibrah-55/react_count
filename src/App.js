import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props){
    super (props);
    this.state={
      count: 0
    };
  }
  render(){
    return (<div>
      <h1>{this.state.count}</h1>
      <button onClick={this.count}>Count</button>
      </div>
      );
  }
  count =() =>{
    this.setState (state =>({
      count: state.count+1
    }))
  }
}

export default App;
