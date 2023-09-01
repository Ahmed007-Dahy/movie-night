import NavBar from './Component/NavBar/NavBar';
import { Fragment, useEffect, useState } from 'react';
import Search from './Component/NavBar/Search/Search';
import MovieNumber from './Component/NavBar/MovieNumber/MovieNumber';
import Main from './Component/UI/Main/Main';
import Container from './Component/UI/Container/Container';
import MovieList from './Component/MovieContainer/MovieList/MovieList';
import WatchedSummery from './Component/MovieWatched/WatchedSummery';
import WatchedMovieList from './Component/MovieWatched/WatchedMovieList';
import LoaderEl from './Component/UI/LoaderEl/LoaderEl';
import ErrorMessage from './Component/UI/ErrorMessage/ErrorMessage';
import MovieDetails from './Component/MovieWatched/MovieDetails';
import { useMovies } from './Component/CustomHooks/useMovies';

function App() {
    const [searchInput, setSearchInput] = useState('');
    const { movies, isLoading, error } = useMovies(searchInput);
    const [watchedMovie, setWatchedMovie] = useState(function () {
        const storedWatchedMovie = localStorage.getItem('watchedMovie');
        return JSON.parse(storedWatchedMovie);
    });
    const [movieId, setMovieId] = useState(null);

    const KEY = 'deb6bb61';

    const handleMovieId = function (id) {
        setMovieId((movieId) => (movieId === id ? null : id));
    };

    function handleCloseMovie() {
        setMovieId(null);
    }

    function handleAddWatchedMovie(movie) {
        setWatchedMovie((watchedMovie) => [...watchedMovie, movie]);
    }

    function handleDeleteWatchedMovie(id) {
        setWatchedMovie((watchedMovie) =>
            watchedMovie.filter((movie) => movie.imdbID !== id),
        );
    }

    useEffect(
        function () {
            localStorage.setItem('watchedMovie', JSON.stringify(watchedMovie));
        },
        [watchedMovie],
    );

    return (
        <Fragment>
            <NavBar>
                <Search
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                />
                <MovieNumber movies={movies} />
            </NavBar>
            <Main>
                <Container>
                    {isLoading && <LoaderEl />}
                    {!isLoading && !error && (
                        <MovieList
                            movies={movies}
                            onSelectMovieId={handleMovieId}
                        />
                    )}
                    {error && <ErrorMessage message={error} />}
                </Container>
                <Container>
                    {movieId ? (
                        <MovieDetails
                            movieId={movieId}
                            onCloseMovie={handleCloseMovie}
                            onAddWatchedMovie={handleAddWatchedMovie}
                            watchedMovie={watchedMovie}
                            KEY={KEY}
                        />
                    ) : (
                        <Fragment>
                            <WatchedSummery watched={watchedMovie} />
                            <WatchedMovieList
                                watched={watchedMovie}
                                onDeletedMovie={handleDeleteWatchedMovie}
                            />
                        </Fragment>
                    )}
                </Container>
            </Main>
        </Fragment>
    );
}

export default App;
