import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=add5cb2b&i=${id}`,
      );

      setMovie(data);
    }

    fetchMovie();
  }, [id]);

  return (
    <div className="page">
      <button className="back__button" onClick={() => navigate(-1)}>
        ← Back to Results
      </button>

      <div className="movie__details">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.co/300x450/2b2b2b/ffffff?text=No+Image"
          }
          alt={movie.Title}
        />

        <div className="movie__details--info">
          <h1>{movie.Title}</h1>

          <p>
            <span className="movie__label">Year:</span> {movie.Year}
          </p>

          <p>
            <span className="movie__label">Rated:</span> {movie.Rated}
          </p>

          <p>
            <span className="movie__label">Genre:</span> {movie.Genre}
          </p>

          <p>
            <span className="movie__label">IMDb Rating:</span>{" "}
            {movie.imdbRating}
          </p>

          <p>
            <span className="movie__label">Plot:</span> {movie.Plot}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
