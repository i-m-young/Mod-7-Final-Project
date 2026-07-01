import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link className="movie__card" to={`/movie/${movie.imdbID}`}>
      <div className="movie__card-container">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://placehold.co/300x450/2b2b2b/ffffff?text=No+Image"
          }
          alt={movie.Title}
        />

        <h3 className="movie__title">{movie.Title}</h3>

        <p>Released: {movie.Year}</p>
      </div>
    </Link>
  );
}

export default MovieCard;
