import { useEffect, useState } from "react";
// import {fetchMovieDetails } from "../../../api"
// import { fetchMoviesByKeyword } from "../../../api";
import { NavLink, useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { searchMovie } from '../../../api'
import SearchMovie from "../../components/SearchMovie/SearchMovie";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
    // const [inputQuery, setInputQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('query') ?? '';
    const location = useLocation();
    console.log(location)

     useEffect(() => {
        if (searchQuery.trim()) {
            const fetchMovies = async () => {
                try {
                    const results = await searchMovie(searchQuery.trim());
                    if (results.length === 0) {
                        setError("Нічого не знайдено за цим запитом.");
                        setMovies([]);
                    } else {
                        setError(null);
                        setMovies(results);
                    }
                } catch {
                    setError("Не вдалося виконати пошук.");
                }
            };
            fetchMovies();
        }
    }, [searchQuery]);

    const query = searchParams.get('query') ?? '';
    console.log(query)
    const handleSetQuery = newValue => {
        searchParams.set('query', newValue);
        // setQuery(newValue);
        // searchParams.set('Test', 123);
        setSearchParams(searchParams);
    };
    return (
        <div className={s.container}>
            <h2>Пошук фільмів</h2>
            <SearchMovie handleSetQuery={handleSetQuery} />
            {/* <form onSubmit={handleSearch} className={s.form}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Введіть ключове слово..."
                    className={s.input}
                />
                <button type="submit" className={s.button}>
                    Шукати
                </button>
            </form> */}
            {error && <p className={s.error}>{error}</p>}
         <MovieList movies={movies} state={location} />
        </div>
    );
};

export default MoviesPage