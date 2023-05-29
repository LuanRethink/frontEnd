import telephone from "../../assets/telephone.svg";
import plant from "../../assets/plant.svg";
import box from "../../assets/box.svg";
import ServiceBox from "./serviceBox";
import "./styles.css";

const AboutUs = () => {
  return (
    <div className="aboutUsDiv">
      <div className="aboutUsInfo">
        <h1> About us </h1>
        <h3> Order now and apreciate the beauty of nature </h3>
      </div>

      <div className="services">
        <ServiceBox
          icon={plant}
          alt="plant"
          title="Large Assorment"
          description="We offer many different types of products with fewer variations in
            each category"
        ></ServiceBox>
        <ServiceBox
          icon={box}
          alt="box"
          title="Fast & Free Shipping"
          description="4-day or less delivery time, free shipping and an expedited delivery option."
        ></ServiceBox>
        <ServiceBox
          icon={telephone}
          alt="telephone"
          title="24/7 Support"
          description="answers to any business related inquiry 24/7 and in real-time."
        ></ServiceBox>
      </div>
    </div>
  );
};

export default AboutUs;
