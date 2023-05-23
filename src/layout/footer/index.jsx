import "./styles.css";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Twitter from "../../assets/twitter.svg";
import FooterCard from "./card";

const Footer = () => {
  return (
    <div className="footer">
      <div className="firstFooterBlock">
        <a className="greenmindFooter"> GREENMIND</a>
        <p> We help you find your dream plant </p>

        <div className="socialMedia">
          <a href="http://facebook.com.br" target="blank">
            <div className="socialMediaCircle">
              <img src={Facebook}></img>
            </div>
          </a>

          <a href="http://instagram.com.br" target="blank">
            <div className="socialMediaCircle">
              <img src={Instagram}></img>
            </div>
          </a>
          <a href="http://twitter.com.br" target="blank">
            <div className="socialMediaCircle">
              <img src={Twitter}></img>
            </div>
          </a>
        </div>
        <p>2023 all Right Reserved Term of use GREENMIND</p>
      </div>

      <div className="secondFooterBlock">
        <FooterCard
          title="Information"
          first="About"
          second="Product"
          third="Blog"
        ></FooterCard>
        <FooterCard
          title="Information"
          first="About"
          second="Product"
          third="Blog"
        ></FooterCard>
        <FooterCard
          title="Information"
          first="About"
          second="Product"
          third="Blog"
        ></FooterCard>
      </div>
    </div>
  );
};

export default Footer;
