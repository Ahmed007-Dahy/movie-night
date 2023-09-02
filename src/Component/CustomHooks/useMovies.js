import { useEffect, useState } from 'react';

const KEY = 'deb6bb61';

export function useMovies(searchInput) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(
        function () {
            const controller = new AbortController();

            async function fetchMovie() {
                try {
                    setIsLoading(true);
                    setError('');
                    const response = await fetch(
                        `https://www.omdbapi.com/?apikey=${KEY}&s=${searchInput}`,
                        { signal: controller.signal },
                    );
                    if (!response.ok)
                        throw new Error(
                            'Ohh, Something was happen for fetching movie',
                        );
                    const data = await response.json();
                    if (data.Response === 'False')
                        throw new Error(
                            'A movie that you search not found try again',
                        );
                    setMovies(data.Search);
                    setError('');
                } catch (err) {
                    if (err.message !== 'AbortError') {
                        setError(err.message);
                    }
                } finally {
                    setIsLoading(false);
                }
            }

            if (searchInput <= 2) {
                setMovies([]);
                setError('');
                return setError('No Movie Searched Yet....');
            }
            fetchMovie();
            return function () {
                controller.abort();
            };
        },
        [searchInput, setError],
    );
    return { movies, isLoading, error };
}
