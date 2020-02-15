import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchBar, ProductTable, ProductCategoryRow, ProductRow, FilterableProductTable, products } from './components';



function App() {
  return (
    <div> 
      <div>
        <ProductTable/>
      </div>
    </div>
  );
}

export default App;



