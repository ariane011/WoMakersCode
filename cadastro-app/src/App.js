import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput'
import Submit from './components/Submit'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: ''
    }
  }

render(){
  return (
    <div className="App">
        <FormInput 
        inputValue={this.state.inputValue}
      />
      <Submit />
    </div>
  );
  }
}

export default App;
