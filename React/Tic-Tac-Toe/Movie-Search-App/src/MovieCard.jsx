function MovieCard({ movie }) {
  return (
    <div className="movie-card">
         {movie.Poster !== "N/A" ? (
      <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <p>No poster avaiable</p>
      )}
      <p>{movie.Title} ({movie.Year})</p>

      
    </div>
  );
}

export default MovieCard;