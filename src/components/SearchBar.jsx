import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
  if (searchTerm.trim() === "") {
    return;
  }

  navigate(`/search?title=${searchTerm}`);
}

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for a movie or TV show..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
