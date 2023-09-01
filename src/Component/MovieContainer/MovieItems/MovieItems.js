function MovieItems({ movie, onSelectMovieId }) {
    return (
        <li
            className="border-b-2 border-b-white p-3.5 flex transition delay-75 hover:bg-primary-darker-color"
            onClick={() => onSelectMovieId(movie.imdbID)}
        >
            <img className="w-20 h-24" src={movie.Poster} alt={movie.Title} />
            <div className="flex flex-col justify-center pl-5 text-white">
                <h2 className="inline-block text-xl">{movie.Title}</h2>
                <p>
                    <span>📅</span>
                    <span>{movie.Year}</span>
                </p>
            </div>
        </li>
    );
}

export default MovieItems;
