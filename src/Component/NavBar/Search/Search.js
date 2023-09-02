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
        <div className="w-full lg:text-center lg:w-1/2">
            <input
                className="w-4/5 p-2.5 my-3.5 bg-primary-color text-white rounded-lg border-none outline-none placeholder:text-white lg:w-2/5"
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
