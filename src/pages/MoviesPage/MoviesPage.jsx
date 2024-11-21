import { useEffect, useState } from "react";

import { fetchMoviesByKeyword } from "../../../api";
import { NavLink } from "react-router-dom";
import s from "./MoviesPage.module.css";

const MoviesPage = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        document.title = "BEST CODERS | MoviesPage";
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query.trim()) {
            setError("Будь ласка, введіть ключове слово.");
            return;
        }
        setError(null);

        try {
            const data = await fetchMoviesByKeyword(query.trim());
            if (data.length === 0) {
                setError("Нічого не знайдено за цим запитом.");
            }
            setMovies(data);
        } catch (err) {
            setError("Не вдалося виконати пошук.");
        }
    };

    return (
        <div className={s.container}>
            <h2>Пошук фільмів</h2>
            <form onSubmit={handleSearch} className={s.form}>
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
            </form>
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