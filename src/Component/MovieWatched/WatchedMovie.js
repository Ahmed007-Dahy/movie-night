function WatchedMovie({ movie, onDeletedMovie }) {
    return (
        <li className="border-b-2 border-b-white py-3.5 px-5 flex items-center justify-between">
            <div className={'flex'}>
                <img
                    className="w-20 h-24"
                    src={movie.poster}
                    alt={movie.title}
                />
                <div className="pl-3 flex flex-col justify-center">
                    <h2 className="inline-block text-xl text-white">
                        {movie.title}
                    </h2>
                    <div className="flex mt-2 gap-3 text-white">
                        <p className="flex items-center gap-0.5">
                            <span>⭐️</span>
                            <span>{movie.imdbRating}</span>
                        </p>
                        <p className="flex items-center gap-0.5">
                            <span>🌟</span>
                            <span>{movie.userRating}</span>
                        </p>

                        <p className="flex items-center gap-0.5">
                            <span>⏳</span>
                            <span>{movie.runtime} min</span>
                        </p>
                    </div>
                </div>
            </div>
            <button
                className={
                    'text-white text-xl bg-forth-color py-1 px-3 rounded-full transition delay-100 hover:bg-forth-lighter-color'
                }
                type={'button'}
                onClick={() => onDeletedMovie(movie.imdbID)}
            >
                X
            </button>
        </li>
    );
}

export default WatchedMovie;
