function WatchedSummery(props) {
    const average = (arr) =>
        arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

    const avgImdbRating = average(
        props.watched.map((movie) => movie.imdbRating),
    );
    const avgUserRating = average(
        props.watched.map((movie) => movie.userRating),
    );
    const avgRuntime = average(props.watched.map((movie) => movie.runtime));
    return (
        <div className="mt-5 text-white py-8 px-5 shadow-2xl shadow-primary-darker-color rounded-b-2xl">
            <h2 className="uppercase mb-4 text-2xl tracking-wide">
                Movies You Watched
            </h2>
            <div className="flex items-center gap-8 text-xl">
                <p className="flex items-center gap-2">
                    <span>#️⃣</span>
                    <span>{props.watched.length} Movies</span>
                </p>
                <p className="flex items-center gap-2">
                    <span>⭐️</span>
                    <span>{avgImdbRating.toFixed(2)}</span>
                </p>
                <p className="flex items-center gap-2">
                    <span>🌟</span>
                    <span>{avgUserRating.toFixed(2)}</span>
                </p>
                <p className="flex items-center gap-2">
                    <span>⏳</span>
                    <span>{avgRuntime.toFixed(2)} min</span>
                </p>
            </div>
        </div>
    );
}

export default WatchedSummery;
