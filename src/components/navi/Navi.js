import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Button
} from "reactstrap";
import CartSummary from './../cart/CartSummary'
export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavbar: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    const linkStyle = {
      color: "white",
      textDecoration: "none"
    }
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Northwind Store</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <Button color="primary"><Link style={linkStyle} to="/">Home</Link></Button>
                &nbsp;
                <Button color="primary"><Link style={linkStyle} to="/cart">Cart Detail</Link></Button>
                &nbsp;
                <Button color="primary"><Link style={linkStyle} to="/saveproduct">Add Product</Link></Button>
                &nbsp;
                <Button color="primary"><Link style={linkStyle} to="/form">Sign in</Link></Button>
              <CartSummary/>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
