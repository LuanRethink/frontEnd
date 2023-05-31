import React, { useState } from "react";

function Dropdown({ children, dropdownValue, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const categoriesInput = dropdownValue?.map((el) => {
    return (
      <li key={el} onClick={() => handleOptionSelect(el)}>
        {`${el}`}
      </li>
    );
  });

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };

  return (
    <div className="dropdownContainer" onClick={toggleDropDown}>
      <button
        type="button"
        className={`dropdown-toggle ${isOpen ? "active" : ""}`}
      >
        <div className="selectedOption">
          {selectedOption ? selectedOption : "Selecione uma opção:"}
        </div>
        <div className="arrowContainer">
          <span className={`arrow ${isOpen ? "active" : ""}`}></span>
        </div>
      </button>
      <ul className={`menu ${isOpen ? "active" : ""}`}>{categoriesInput}</ul>
    </div>
  );
}

export default Dropdown;
