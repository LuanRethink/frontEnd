import lupa from "../../assets/lupa.svg";
import { useState } from "react";
import "./styles.css";

const Search = ({ placeholder, onClick, onChange, value }) => {
  return (
    <label className="searchDiv">
      <div className="searchContent">
        <input
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className="searchInput"
        />
        <div className="searchIcon" onClick={onClick}>
          <img src={lupa} />
        </div>
      </div>
    </label>
  );
};

export default Search;
