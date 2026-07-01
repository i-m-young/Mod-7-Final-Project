import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

function Results() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("A_TO_Z");

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);

      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=add5cb2b&s=${title}`,
      );

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMovies(data.Search || []);
      setLoading(false);
    }

    fetchMovies();
  }, [title]);

  const sortedMovies = [...movies];

  if (sort === "A_TO_Z") {
    sortedMovies.sort((a, b) => {
      if (a.Title < b.Title) return -1;
      if (a.Title > b.Title) return 1;
      return 0;
    });
  }
  if (sort === "Z_TO_A") {
    sortedMovies.sort((a, b) => {
      if (a.Title > b.Title) return -1;
      if (a.Title < b.Title) return 1;
      return 0;
    });
  }
  if (sort === "NEWEST") {
    sortedMovies.sort((a, b) => b.Year - a.Year);
  }
  if (sort === "OLDEST") {
    sortedMovies.sort((a, b) => a.Year - b.Year);
  }

  if (loading) {
    return (
      <div className="loading">
        <div className="loading-spinner"></div>
      </div>
    );
  }
  if (!loading && movies.length === 0) {
  return (
    <div className="page">
      <Link className="back__button" to="/">
        ← Back to Home
      </Link>

      <div className="no-results">
        <h2>No results found for "{title}".</h2>
        <p>Try searching with the full movie or TV show title, or check your spelling.</p>
      </div>
    </div>
  );
}

  return (
    <div className="page">
      <Link className="back__button" to="/">
        ← Back to Home
      </Link>

      <div className="results__header">
        <h1 className="results__title">Results for "{title}"</h1>

        <SearchBar />

        <div className="sort">
          <label>Sort by:</label>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="A_TO_Z">A to Z</option>
            <option value="Z_TO_A">Z to A</option>
            <option value="NEWEST">Newest</option>
            <option value="OLDEST">Oldest</option>
          </select>
        </div>
      </div>

      <div className="movie__list">
        {sortedMovies.slice(0, 6).map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Results;
