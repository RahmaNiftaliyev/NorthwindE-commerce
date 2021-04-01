import React, { Component } from "react";
import { Badge, Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "./../../redux/action/productAction";
import * as cartActions from "./../../redux/action/cartActions";
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts();
  }

  handleAddToCart = (product) => {
    alertify.success(`${product.productName} added to cart`)
    this.props.addToCart({quantity:1,product})
  }

  render() {
    return (
      <div>
        <h1>
          <Badge color="danger">Product List</Badge>
        </h1>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td><Link to={"/saveproduct/" + product.id}>{product.productName}</Link></td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button onClick={() => this.handleAddToCart(product)} color="danger">Add</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.getProductsReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getProducts: bindActionCreators(productActions.getProducts, dispatch),
    addToCart: bindActionCreators(cartActions.addToCart,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
