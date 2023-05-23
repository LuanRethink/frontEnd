import "./styles.css";
const ImageCard = ({ imagePath, title, price }) => {
  return (
    <div className="imageCard">
      <div className="imageCardImageDiv">
        <img src={imagePath}></img>
      </div>
      <div className="imageCardInformationDiv">
        <p>{title}</p>
        <p>R$: {price}</p>
      </div>
    </div>
  );
};

export default ImageCard;
