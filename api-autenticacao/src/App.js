import React from 'react';
import './App.css';
import Giphy from './component/Giphy';
import Search from './component/Search'

function App() {
  return (
    <div className="principal" >
      <Search />
      <div className="giphy">
      <Giphy />
      </div>
    </div>
  );
}

export default App;
