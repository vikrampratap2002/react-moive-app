// components/GenreFilter.jsx
function GenreFilter({ genres, selectedGenre, onGenreClick }) {
  return (
    <div className="filter-container">
      <h2>Filter by Genre</h2>

      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => onGenreClick(genre)}
            className={selectedGenre === genre ? "active" : ""}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;