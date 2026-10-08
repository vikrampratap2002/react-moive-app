// components/MovieList.jsx
function MovieList({ movies }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Year</th>
          </tr>
        </thead>

        <tbody>
          {movies.map((movie) => (
            <tr key={`${movie.title}-${movie.year}`}>
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;