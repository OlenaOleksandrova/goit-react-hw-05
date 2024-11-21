import { useEffect, useState } from "react";
import {fetchMovieDetails } from "../../../api"
// import { fetchMoviesByKeyword } from "../../../api";
import { NavLink } from "react-router-dom";
import s from "./MoviesPage.module.css";
import SearchMovie from "../../components/SearchMovie/SearchMovie";

const MoviesPage = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    

    useEffect(() => {
        document.title = "BEST CODERS | MoviesPage";
    }, []);

    // const handleSearch = async (e) => {
    //     e.preventDefault();
    //     if (!query.trim()) {
    //         setError("Будь ласка, введіть ключове слово.");
    //         return;
    //     }
    //     setError(null);

    //     try {
    //         const data = await fetchMovieDetails (query.trim());
    //         if (data.length === 0) {
    //             setError("Нічого не знайдено за цим запитом.");
    //         }
    //         setMovies(data);
    //     } catch (err) {
    //         setError("Не вдалося виконати пошук.");
    //     }
    // };

    const handleSetQuery = newValue => {
        setQuery(newValue);
}  
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
            <ul className={s.list}>
                {movies.map((movie) => (
                    <li key={movie.id} className={s.listItem}>
                        <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
};

export default MoviesPage