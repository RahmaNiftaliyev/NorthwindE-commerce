import React, { Component } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "./../../redux/action/categoryActions";
import * as productActions from './../../redux/action/productAction'

class CategoryList extends Component {
  componentDidMount() {
    this.props.getCategories();
  }

  renderProductsByCategoryId = (category) => {
    this.props.changeCategory(category);
    this.props.getProducts(category.id)
  }

  render() {
    return (
      <div>
        <h1>
          <Badge color="primary">Category List</Badge>
        </h1>
        <ListGroup>
          {this.props.categories.map((category) => {
            return (
              <ListGroupItem
                onClick={() => this.renderProductsByCategoryId(category)}
                active={category.categoryName === this.props.currentCategory.categoryName}
                key={category.id}
              >
                {category.categoryName}
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    categories: state.getCategoriesReducer,
    currentCategory: state.changeCategoryReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCategories: bindActionCreators(categoryActions.getCategories, dispatch),
    changeCategory: bindActionCreators(
      categoryActions.changeCategory,
      dispatch
    ),
    getProducts:bindActionCreators(productActions.getProducts,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
