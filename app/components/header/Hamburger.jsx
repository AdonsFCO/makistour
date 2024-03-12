import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = ({ onClick, className, ariaExpanded }) => {
  return (
    <button
      className={className}
      aria-expanded={ariaExpanded}
      aria-label="menu"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faBars} height={30} />
    </button>
  );
};

export default Hamburger;
