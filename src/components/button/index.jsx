import "./styles.css";

const Button = ({
  title,
  type,
  onclick,
  visible,
  background,
  children,
  disabled,
}) => {
  return (
    <>
      <button
        type={type}
        className={`button ${background} ${visible ? "visible" : "hidden"}`}
        onClick={onclick}
        disabled={disabled}
      >
        {title}
        {children}
      </button>
    </>
  );
};

export default Button;
