import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { FilterableProductTable } from './components';
import { PRODUCTS } from './mock'
import FormImput from './components/Form/FormInput';
import List from './components/List';

function App() {
  console.log(''>>>'', PRODUCTS);
  return (
    <div> 
      <div>
        <form>
          <input>
          </input>
        </form>
      </div>
    </div>
  );
}

export default App;



