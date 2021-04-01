import React, { Component } from "react";
import { Container } from "reactstrap";
import Dashboard from "./Dashboard";
import Navi from "./../navi/Navi";
import { Switch, Route } from "react-router-dom";
import NotFound from "./../common/NotFound";
import CartDetails from "./../cart/CartDetails";
import Logins from "./../form/Logins";
import AddOrUpdateProduct from "./../product/AddOrUpdateProduct";
export default class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Navi />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route
              path="/saveproduct/:productId"
              component={AddOrUpdateProduct}
            />
            <Route path="/saveproduct" component={AddOrUpdateProduct} />
            <Route path="/form" component={Logins} />
            <Route path="/cart" component={CartDetails} />
            <Route component={NotFound} />
          </Switch>
        </Container>
      </div>
    );
  }
}
