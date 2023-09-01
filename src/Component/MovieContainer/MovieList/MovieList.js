import MovieItems from '../MovieItems/MovieItems';

function MovieList({ movies, onSelectMovieId }) {
    return (
        <ul className="list-none pt-14">
            {movies?.map((movie) => (
                <MovieItems
                    key={movie.imdbID}
                    movie={movie}
                    onSelectMovieId={onSelectMovieId}
                />
            ))}
        </ul>
    );
}

export default MovieList;
