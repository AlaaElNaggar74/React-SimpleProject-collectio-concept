


const Product = (props) => {
  return (
    <div className="ProductComponent">
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
      <h4>{props.discri}</h4>
      <h5>{props.price}</h5>
      
    </div>
  );
}

export default Product;
