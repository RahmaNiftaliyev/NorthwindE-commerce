import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "./../../redux/action/cartActions";
import alertify from "alertifyjs";
import { Table, Button, Alert } from "reactstrap";
import { Link } from "react-router-dom";

class CartDetails extends Component {
  handleRemoveFromCart = (cartItem) => {
    alertify.success(`${cartItem.product.productName} removed from cart`);
    this.props.removeFromCart(cartItem.product);
  };

  handleNotEmptyCart = () => {
    return (
      <div>
        <h1 className="text-center font-italic bg-light py-3 text-primary">
          Your Cart
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
            {this.props.cart.map((cartItem) => {
              return (
                <tr key={cartItem.product.id}>
                  <td>{cartItem.product.id}</td>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.product.quantityPerUnit}</td>
                  <td>{cartItem.product.unitPrice}</td>
                  <td>{cartItem.product.unitsInStock}</td>
                  <td>
                    <Button color="danger" onClick={() => this.handleRemoveFromCart(cartItem)}>
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  };

  handleEmptyCart = () => {
    const linkStyle = {
      color: "white",
      textDecoration: "none",
    };
    return (
      <div>
        <Alert className="py-3">
          Your Cart is Empty if you want to buy something else follow our Learn
          More button
        </Alert>
        <Button block color="primary" >
          <Link style={linkStyle} to="/">
            Learn More
          </Link>
        </Button>
      </div>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.handleNotEmptyCart()
          : this.handleEmptyCart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
