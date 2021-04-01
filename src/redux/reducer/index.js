import { combineReducers } from "redux";
import getCategoriesReducer from "./getCategoriesReducer";
import changeCategoryReducer from "./changeCategoryReducer";
import getProductsReducer from "./getProductsReducer";
import cartReducer from "./cartReducer";
import savedProductReducer from "./savedProductReducer";

const rootReducer = combineReducers({
  getCategoriesReducer,
  changeCategoryReducer,
  getProductsReducer,
  cartReducer,
  savedProductReducer,
});

export default rootReducer;
