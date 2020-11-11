import React, { useState, useEffect } from "react";
import DownArrow from "../imgs/down.png";
import UpArrow from "../imgs/up.png";

function MultiSelectDropdown(props) {
  const [data, setData] = useState([]);
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState();
  useEffect(() => {
    setData(props.optionsData);
  }, [props.optionsData]);

  useEffect(() => {
    setSelected();
  }, [props.multiSelect]);
  const getColor = (dt) => {
    if (selected && selected.id && dt.id === selected.id) return "#f95070";
    return null;
  };
  return (
    <div>
      <label className="label">Select the options</label>
      <div
        className="dropdown-box"
        onClick={(evt) => setShowOptions(!showOptions)}
      >
        {selected && selected.value ? (
          selected.value
        ) : (
          <div>
            <span>select..</span>
            <span className="in-label">
              {!showOptions ? (
                <img src={DownArrow} className="arrow"></img>
              ) : (
                <img src={UpArrow} className="arrow"></img>
              )}
            </span>
          </div>
        )}
      </div>

      {showOptions ? (
        <div className="options-container">
          {data && data.length ? (
            <ul>
              {data.map((dt, index) => {
                return (
                  <div key={index}>
                    <li
                      key={index}
                      onClick={(evt) => {
                        if (props.multiSelect) {
                          props.showSelected(dt);
                        } else {
                          setSelected(dt);
                          setShowOptions(false);
                        }
                      }}
                      style={{
                        background: getColor(dt),
                      }}
                    >
                      {dt.value}
                    </li>
                  </div>
                );
              })}
            </ul>
          ) : (
            "No options available"
          )}
        </div>
      ) : null}
    </div>
  );
}

export default MultiSelectDropdown;
