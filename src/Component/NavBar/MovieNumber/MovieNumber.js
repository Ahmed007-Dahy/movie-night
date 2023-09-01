function MovieNumber(props) {
    return (
        <div>
            <h2 className="text-white text-xl">
                Found {props.movies.length} results
            </h2>
        </div>
    );
}

export default MovieNumber;
