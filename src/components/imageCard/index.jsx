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
        {title ? <p>{title}</p> : ""}

        {price ? <p>R$: {price}</p> : ""}
      </div>
    </div>
  );
};

export default ImageCard;
