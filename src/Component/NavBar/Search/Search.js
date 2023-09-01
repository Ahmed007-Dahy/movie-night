import { useEffect, useRef } from 'react';

function Search({ searchInput, setSearchInput }) {
    const inputSearch = useRef(null);
    useEffect(function () {
        inputSearch.current.focus();
    }, []);
    const searchHandler = function (e) {
        setSearchInput(e.target.value);
    };
    return (
        <div className="w-1/2 text-center">
            <input
                className="w-2/5 p-2.5 bg-primary-color text-white rounded-lg border-none outline-none placeholder:text-white"
                type="text"
                placeholder="Search Movie...."
                value={searchInput}
                onChange={searchHandler}
                ref={inputSearch}
            />
        </div>
    );
}

export default Search;
