import "./styles.css";
const FooterCard = ({ title, first, second, third }) => {
  return (
    <div className="cardWithInformation">
      <a href="https://google.com">{title}</a>
      <a href="https://google.com">{first}</a>
      <a href="https://google.com">{second}</a>
      <a href="https://google.com">{third}</a>
    </div>
  );
};

export default FooterCard;
