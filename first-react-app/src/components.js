import React from 'react'

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

const ProductRow = props => {
    const product = props.product;
    return(
      <tr>
        <th colSpan="2">product.category</th>
      </tr>
    );
  };
  
  
  const ProductCategoryRow = (props) => {
    const product = props.product
    return(
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }


  export class ProductTable extends React.Component {
      constructor(props) {
          super(props);
      }

      render () {
          return(
              <table>
                  <thread>
                  <tr>
                      <th>Name</th>
                      <th>Price</th>
                  </tr>
                  </thread>
                  <ProductCategoryRow product={products} />
              </table>
          )
      }
  }



//exports const = Props
 