import "./styles.css";
const ImageCard = ({ imagePath, title, price, centralizeText }) => {
  return (
    <div className="imageCard">
      <div className="imageCardImageDiv">
        <img src={imagePath}></img>
      </div>
      <div
        className={`imageCardInformationDiv ${
          centralizeText ? "centralizeText" : ""
        }`}
      >
        <div className="productCardTitle">{title ? <p>{title}</p> : ""}</div>
        <div className="productCardDescription">
          {" "}
          {price ? <p>R$: {price}</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
