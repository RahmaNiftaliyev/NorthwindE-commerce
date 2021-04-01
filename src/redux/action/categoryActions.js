import actionTypes from './actionTypes';
export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,// "CHANGE_CATEGORY"
    payload: category,
  };
}

// {type:"CHANGE_CATEGORY",payload:category}

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,//"GET_CATEGORIES_SUCCESS"
    payload: categories,
  };
}

// {type:"GET_CATEGORIES_SUCCESS",payload:categories}


export function getCategories() {
  return function (dispatch) {
    return fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((response2) => dispatch(getCategoriesSuccess(response2)));
  };
}
