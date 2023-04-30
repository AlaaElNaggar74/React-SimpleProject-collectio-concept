

import React from 'react';

const ProductComp = (props) => {
  return (
    <div className="productComponentn">
      <img src={props.product.image} alt="erroe" />
    <h1>{props.product.title}</h1>
    <p>{props.product.description}</p>
    <p>Price: {props.product.price}</p>
    <p>Count : {props.product.rating.count}</p>
      
    </div>
  );
}

export default ProductComp;
