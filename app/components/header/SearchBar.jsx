import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const searchInputRef = useRef(null);

  const handleSearch = (event) => {
    // Your search logic here
  };

  return (
    <div className="relative flex items-center h-4 pl-5">
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Search..."
        className="w-full rounded-sm text-black px-1 py-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 border border-gray-300 bg-white shadow-sm"
      />
      <button
        type="button"
        className="absolute right-0 top-0.5 rounded-none bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white py-0.5 px-1 text-black flex items-center" // Added `flex items-center`
        onClick={handleSearch}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
