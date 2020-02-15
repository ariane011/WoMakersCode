import React from 'react'
import ReactDOM from 'react-dom';

export class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <input type="text" placeholder="Search..."/>
                <div>
                    <input type="checkbox" name="check" id="check"/>
                    <label for="check">Somente produtos em destaque</label>
                </div>
            </div>
        )
    }

}

const ProductCategoryRow = (props) => {
    const product = props.product
    return(
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }

const ProductRow = props => {
    const product = props.product;
    return(
      <tr>
        <th colSpan="2">product.category</th>
      </tr>
    );
  };
  
  

  export class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
  
      const rows = [];
      const lastCategory = null;
  
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category={product.category}
              key={product.category} />
          );
        }
        rows.push(
          <ProductRow
            product={product}
            key={product.name}
          />
        );
        lastCategory = product.category;
      });
  
      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filterText: '',
        inStockOnly: false
      };
    }
  
    render() {
      return (
        <div>
          <SearchBar
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
          <ProductTable
            products={this.props.products}
            filterText={this.state.filterText}
            inStockOnly={this.state.inStockOnly}
          />
        </div>
      );
    }
  }

const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
<FilterableProductTable products={PRODUCTS} />,
document.getElementById('root')
);