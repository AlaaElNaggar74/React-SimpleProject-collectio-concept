import React from "react";
// import ProductDataFetch from "./ProductDataFetch";
import ProductFetch from "./ProductFetch";
import { useState, useEffect } from "react";

const ProductListFetch = (props) => {
  let [ProductFetchx, setProductFetchx] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => setProductFetchx(data));
  }, []);

  let newarr = ProductFetchx.map((ele) => {
    return ele.price >= 100 && <ProductFetch key={ele.id} product={ele} />;
  });
  return (
    <>
      <div className="products">{newarr}</div>
    </>
  );
};

export default ProductListFetch;
