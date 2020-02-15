import React from 'react'

export class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

export class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export class ProductTable extends React.Component {
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const products= this.props.products;

        let rows = [], lastCategory = null;

    products.map((product) => {
        if (!product.name.toLowerCase().includes(filterText.toLowerCase()) || (!product.stocked && inStockOnly)) {
            return;
        }

        if (product.category !== lastCategory) {
            rows.push(<ProductCategoryRow category={product.category} key={product.category}/>);
        }

        rows.push(<ProductRow product={product} key={product.name}/>);
        lastCategory = product.category;

    });

    if (rows.length > 0) {
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
  } else {
      return <p>\_(ツ)_/¯</p>;
  }
}
    



// export class SearchBar extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;

//     return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..."
//           value={filterText} />
//         <p>
//           <input
//             type="checkbox"
//             checked={inStockOnly} />
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// export class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filterText: '',
//       inStockOnly: false
//     };
//   }

//   render() {
//     return (
//       <div>
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//         <ProductTable
//           products={this.props.products}
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }


export default = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

