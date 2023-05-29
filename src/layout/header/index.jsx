import "./styles.css";
import verticalLine from "../../assets/verticalLine.svg";
import people from "../../assets/people.svg";
import shoppingCart from "../../assets/shoppingCart.svg";
import horizontalLines from "../../assets/horizontalLines.svg";
const Header = () => {
  return (
    <div className="header">
      <div className="nameDiv">
        <a href="/">GREENMIND</a>
      </div>
      <div className="pagesDiv">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="https://google.com">Contacts</a>
      </div>
      <div className="iconsDiv">
        <a href="https://google.com">
          <img src={shoppingCart}></img>
        </a>
        <a href="https://google.com">
          <img src={people}></img>
        </a>
        <img src={verticalLine}></img>
        <a href="https://google.com">
          <img src={horizontalLines}></img>
        </a>
      </div>
    </div>
  );
};

export default Header;
