

import React from 'react';

const ProductFetch = (props) => {
  return (
    <div className="ProductFetch">
      <img src={props.product.image} alt="erroe" />
    <h1>{props.product.title}</h1>
    <p>{props.product.description}</p>
    <p>Price: {props.product.price}</p>
    <p>Count : {props.product.rating.count}</p>
      
    </div>
  );
}

export default ProductFetch;
