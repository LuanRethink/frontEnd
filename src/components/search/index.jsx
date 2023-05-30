import lupa from "../../assets/lupa.svg";
import "./styles.css";

const Search = ({ placeholder, onClick }) => {
  return (
    <label className="searchDiv">
      <div className="searchContent">
        <input placeholder={placeholder} className="searchInput" />
        <div className="searchIcon" onClick={onClick}>
          <img src={lupa} />
        </div>
      </div>
    </label>
  );
};

export default Search;
