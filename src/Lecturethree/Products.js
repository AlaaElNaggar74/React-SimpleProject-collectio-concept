import React from "react";
import ProductData from "./ProductData";
import ProductComp from "./ProductComp";
const Products = (props) => {


  let newarr = ProductData.map((ele) => {
    return ele.price >= 100 && <ProductComp key={ele.id} product={ele} />;
  });

  return (
    <>
      <label htmlFor="">Price : </label>

      <select>
        <option value="one">100</option>
        <option value="two">200</option>
        <option value="three">300</option>
        <option value="four">500</option>
      </select>
      <div className="products">{newarr}</div>
    </>
  );
};

export default Products;
