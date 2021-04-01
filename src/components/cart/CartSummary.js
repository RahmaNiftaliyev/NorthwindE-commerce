import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "./../../redux/action/cartActions";
import alertify from "alertifyjs";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
class CartSummary extends Component {
  handleRemoveFromCart = (product) => {
    alertify.success(`${product.productName} removed from cart`);
    this.props.removeFromCart(product);
  };

  handleNotEmptyCart = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => {
            return (
              <DropdownItem key={cartItem.product.id}>
                <Badge
                  onClick={() => this.handleRemoveFromCart(cartItem.product)}
                  color="primary"
                >
                  X
                </Badge>
                &nbsp;
                {cartItem.product.productName}
                &nbsp;
                <Badge color="danger">{cartItem.quantity}</Badge>
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  handleEmptyCart = () => {
    return (
      <NavItem>
        <NavLink>Empty Cart</NavLink>
      </NavItem>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
