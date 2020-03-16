import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';


class App extends Component {

  state = {
    inputValue: 'botao'
  }

  inputChange = event => {
    this.setState({
      input: event.target.value
    })
  }

  render() {
    const { 
      newButton, // maDispathToProps
      newValue // mapStateToProps
    } = this.props;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input 
        onChange={this.inputChange}
        type='text'
        value={this.state.inputValue} />
        <button onClick={() => clickButton(this.state.inputValue)}>
          Clique me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispathToProps = dispath

export default connect(mapStateToProps)(App);


