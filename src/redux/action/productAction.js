import actionTypes from './actionTypes';

export function getProductsSuccess(products) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function createProductSuccess(product) {
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

//{productName:chai,id:1,quantityPerUnit:23,unitPrice:12,unitsInStock:21}
//{}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    body: JSON.stringify(product),
    headers: { "Content-type": "application/json" },
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product).then((savedProduct) => {
      product.id
        ? dispatch(updateProductSuccess(savedProduct))
        : dispatch(createProductSuccess(savedProduct));
    });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Error");
  throw error;
}

export function getProducts(categoryId) {
  let url = "http://localhost:3000/products";

  if (categoryId) {
    url += "/?categoryId=" + categoryId;
  }

  return function (dispatch) {
    return fetch(url)
      .then((response) => response.json())
      .then((response2) => dispatch(getProductsSuccess(response2)));
  };
}
