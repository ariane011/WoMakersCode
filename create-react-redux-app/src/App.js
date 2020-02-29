import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends Component {
  render() {
    const { newValue } = this.props;
    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input type='text' />
        <button>
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

export default connect(mapStateToProps)(App);


