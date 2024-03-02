import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import react, { useState } from "react";

const Hamburger = ({ onClick, className}) => {
  return (
    <div className={className}>
      <FontAwesomeIcon
        icon={faBars}
        width="15px"
        onClick={onClick}
      />
    </div>
  );
};

export default Hamburger;
