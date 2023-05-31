import "./styles.css";

const Button = ({ title, type, onclick, visible, background, children }) => {
  return (
    <>
      <button
        type={type}
        className={`button ${background} ${visible ? "visible" : "hidden"}`}
        onClick={onclick}
      >
        {title}
        {children}
      </button>
    </>
  );
};

export default Button;
