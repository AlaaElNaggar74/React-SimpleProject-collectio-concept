


const Button = (props) => {
  return (
    <div className="btn">
      <button onClick={props.onClick}>
        {props.action}
      </button>
    </div>
  );
}

export default Button;
