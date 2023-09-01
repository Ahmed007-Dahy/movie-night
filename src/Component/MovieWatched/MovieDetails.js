import { Fragment, useEffect, useState } from 'react';
import StarRatingList from '../StarRatinng/StarRatingList/StarRatingList';
import LoaderEl from '../UI/LoaderEl/LoaderEl';

function MovieDetails({
    movieId,
    onCloseMovie,
    KEY: movieKey,
    onAddWatchedMovie,
    watchedMovie,
}) {
    const [movies, setMovies] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState('');

    const isWatched = watchedMovie
        .map((movie) => movie.imdbID)
        .includes(movieId);

    const watchedMovieRating = watchedMovie.find(
        (movie) => movie.imdbID === movieId,
    )?.userRating;
    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movies;

    function handleAdd() {
        const newMovieDetails = {
            imdbID: movieId,
            title,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(' ').at(0)),
            userRating,
        };
        onAddWatchedMovie(newMovieDetails);
        onCloseMovie();
    }

    useEffect(
        function () {
            function exitClick(e) {
                if (e.code === 'Escape') {
                    onCloseMovie();
                }
            }

            document.addEventListener('keydown', exitClick);

            return function () {
                document.removeEventListener('keydown', exitClick);
            };
        },
        [onCloseMovie],
    );

    useEffect(
        function () {
            if (!title) return;
            document.title = `Movie | ${title}`;

            return function () {
                document.title = 'Movie Night';
            };
        },
        [title],
    );

    useEffect(
        function () {
            async function fetchMovieData() {
                setIsLoading(true);
                const response = await fetch(
                    `https://www.omdbapi.com/?apikey=${movieKey}&i=${movieId}`,
                );
                const data = await response.json();
                setMovies(data);
                setIsLoading(false);
            }

            fetchMovieData();
        },
        [movieId, movieKey],
    );
    return (
        <div className={'flex flex-col gap-6'}>
            {isLoading ? (
                <LoaderEl />
            ) : (
                <Fragment>
                    <header
                        className={
                            'flex items-center gap-10 bg-secondary-color'
                        }
                    >
                        <button
                            className={
                                'text-white text-3xl bg-forth-color rounded-full px-2 pb-1.5 z-30 transition delay-75 hover:bg-forth-lighter-color absolute top-1 left-1'
                            }
                            type={'button'}
                            onClick={onCloseMovie}
                        >
                            &larr;
                        </button>
                        <img
                            className={'w-1/4'}
                            src={poster}
                            alt={`Poster of ${title} movie`}
                        />
                        <div className={'text-white'}>
                            <h2 className={'text-3xl mb-2.5'}> {title} </h2>
                            <p className={'text-gray-400'}>
                                {released} &bull; {runtime}
                            </p>
                            <p className={'text-gray-400'}> {genre} </p>
                            <p className={'text-gray-400'}>
                                <span>⭐</span>
                                {imdbRating} IMDb rating
                            </p>
                        </div>
                    </header>
                    <div
                        className={
                            'bg-secondary-color w-fit py-2 px-2.5 mx-auto text-center flex flex-col gap-5 items-center justify-center'
                        }
                    >
                        {!isWatched ? (
                            <Fragment>
                                <StarRatingList
                                    maxRating={10}
                                    onGetUserRating={setUserRating}
                                />
                                {userRating > 0 && (
                                    <button
                                        className={
                                            'text-white text-xl bg-forth-color py-3 px-8 rounded-2xl transition delay-75 hover:bg-forth-lighter-color'
                                        }
                                        type={'button'}
                                        onClick={handleAdd}
                                    >
                                        Add To your List
                                    </button>
                                )}
                            </Fragment>
                        ) : (
                            <p className={'text-white text-xl'}>
                                You have been rated this movie before, ⭐
                                {watchedMovieRating} stars
                            </p>
                        )}
                    </div>
                    <section
                        className={
                            'flex flex-col items-center justify-center gap-7'
                        }
                    >
                        <p className={'text-white text-xl w-2/3 italic mt-2.5'}>
                            {plot}
                        </p>
                        <p className={'text-white text-xl w-2/3'}>
                            Starring {actors}
                        </p>
                        <p className={'text-white text-xl w-2/3'}>
                            Directed by {director}
                        </p>
                    </section>
                </Fragment>
            )}
        </div>
    );
}

export default MovieDetails;
