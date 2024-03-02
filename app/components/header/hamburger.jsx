import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import react, { useState } from "react";

const Hamburger = ({ onClick }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        width="10px"
        className="animate-pulse"
        onClick={onClick}
      />
    </div>
  );
};

export default Hamburger;
