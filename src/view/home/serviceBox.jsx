import "./styles.css";

const ServiceBox = ({ icon, title, description, alt }) => {
  return (
    <div className="serviceBox">
      <img src={icon} alt={alt}></img>
      <h1>{title}</h1>
      <h2>{description}</h2>
    </div>
  );
};

export default ServiceBox;
