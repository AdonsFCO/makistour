import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <FontAwesomeIcon icon={faBars} width="10px" />
  );
};

export default Hamburger;
