import React from "react";
import TextInput from "./../toolbox/TextInput";
import SelectInput from "./../toolbox/SelectInput";

const ProductDetail = ({
  categories,
  product,
  onSave,
  onChange,
  errors,
  placeHolder,
}) => {
  return (
    <form onSubmit={onSave} autoComplete="off">
      <h2>{product.id ? "UPDATE" : "ADD"}</h2>
      <TextInput
        name="productName"
        label="Product Name"
        value={product.productName}
        error={errors.productName} //must be product name
        placeHolder={placeHolder}
        onChange={onChange}
      />
      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Choose"
        onChange={onChange}
        error={errors.categoryId}
        options={categories.map((category) => ({
          values: category.id,
          text: category.categoryName,
        }))}
      />
      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit"
        value={product.quantityPerUnit}
        error={errors.quantityPerUnit}
        placeHolder={placeHolder}
        onChange={onChange}
      />
      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        error={errors.unitPrice}
        placeHolder={placeHolder}
        onChange={onChange}
      />
      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        error={errors.unitsInStock}
        placeHolder={placeHolder}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-primary">
        {product.id ? "Update" : "Add"} Product
      </button>
    </form>
  );
};

export default ProductDetail;
