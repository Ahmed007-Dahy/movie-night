import WatchedMovie from './WatchedMovie';

function WatchedMovieList({ watched, onDeletedMovie }) {
    return (
        <ul className="list-none pt-14 h-720">
            {watched.map((movie) => (
                <WatchedMovie
                    key={movie.imdbID}
                    movie={movie}
                    onDeletedMovie={onDeletedMovie}
                />
            ))}
        </ul>
    );
}

export default WatchedMovieList;
