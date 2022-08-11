import React, { useState } from "react";
import "./select.css";

const Select = (props) => {
  const [selected, setSelected] = useState("Специальность");
  const [anim, setAnim] = useState(false);
  const [opened, setOpened] = useState(false);
  const [focus, setFocus] = useState(false);

  const dropdown = (e) => {
    e.preventDefault();
    setAnim(!anim);
    setOpened(!opened);
  };

  const valueSelectF = () => {
    setFocus(true);
    setSelected("BackEnd Developer");
    setOpened(false);
    setAnim(false);
  };
  const valueSelectS = () => {
    setFocus(true);
    setSelected("Marketing");
    setOpened(false);
    setAnim(false);
  };
  return (
    <div className="select">
      <button className="dropdownSelect" onClick={(e) => dropdown(e)}>
        <p className={focus ? "selectedItem" : "selectedItem grey"}>
          {selected}
        </p>
        <svg
          className={anim ? "crossAnim" : ""}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="#9A9A9A"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0L0 6L1.41 7.41L6 2.83L10.59 7.41L12 6L6 0Z" />
        </svg>
      </button>
      {opened ? (
        <div className="dropdownMenu">
          <p className="dropdownItem1 " onClick={valueSelectF}>
            BackEnd
          </p>
          <p className="dropdownItem2" onClick={valueSelectS}>
            MArketing
          </p>
        </div>
      ) : null}

      {selected}
    </div>
  );
};

export default Select;
