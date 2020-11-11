import React, { useState, useEffect } from "react";
import Close from "../imgs/close.svg";

const data = [
  { id: "option1", value: "Option 1" },
  { id: "option2", value: "Option 2" },
  { id: "option3", value: "Option 3" },
  { id: "option4", value: "Option 4" },
  { id: "option5", value: "Option 5" },
];
import MultiSelectDropdown from "./MultiSelectDropdown";
function Content(props) {
  const [selectedValues, setSelected] = useState([]);
  const [dropdownData, setDropdownData] = useState([...data]);
  const [isMulti, setIsMulti] = useState(true);
  const showSelectedValues = (selected) => {
    if (selected && selected.value) {
      let selectedList = [...selectedValues];
      selectedList.push(selected);
      setSelected(selectedList);

      let dropdownOptions = [...dropdownData];
      selectedList.forEach((ele) => {
        dropdownOptions = dropdownOptions.filter((dt) => dt.id !== ele.id);
      });
      setDropdownData(dropdownOptions);
    }
  };
  const unselect = (data) => {
    let dropdownOptions = [...dropdownData];
    dropdownOptions.push(data);
    let selected = [...selectedValues];
    selected = selected.filter((ele) => ele.id !== data.id);
    setDropdownData(dropdownOptions);
    setSelected(selected);
  };
  const clearValues = () => {
    setSelected([]);
    setDropdownData([...data]);
  };
  return (
    <div style={{ margin: `24px` }}>
      <span>
        <input
          type="radio"
          id="dropdown"
          name="dropdown"
          value="single"
          onClick={(evt) => {
            setIsMulti(false);
            clearValues();
          }}
        ></input>{" "}
        <label>Single select</label>
      </span>
      <span className="radio-btn">
        <input
          type="radio"
          id="dropdown"
          name="dropdown"
          value="multi"
          onClick={(evt) => {
            setIsMulti(true);
            clearValues();
          }}
          defaultChecked
        ></input>
        <label>Multi select</label>{" "}
      </span>

      <MultiSelectDropdown
        optionsData={dropdownData}
        showSelected={(selected) => showSelectedValues(selected)}
        multiSelect={isMulti}
      ></MultiSelectDropdown>
      {selectedValues && selectedValues.length ? (
        <div>
          <div className="chips-container">
            {selectedValues.map((ele, index) => {
              return (
                <span key={index} className="chip">
                  {ele.value}
                  <span>
                    <img
                      src={Close}
                      className="close-icn"
                      onClick={(evt) => unselect(ele)}
                    ></img>
                  </span>
                </span>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Content;
