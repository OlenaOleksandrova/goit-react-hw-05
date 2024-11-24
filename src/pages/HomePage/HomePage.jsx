import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../../api";
import s from "./HomePage.module.css"
import { Link, useLocation } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        document.title = "BEST CODERS | HomePage";

    const getMovies = async () => {
        try {
            const data = await fetchTrendingMovies ();
            setMovies(data);
        }
        catch (err) {
            setError('Не вдалося завантажити фільми');
        }
    };
    getMovies();
    }, []);
    
    if (error) return <p>{error}</p>;
    
    return (
        <div>
            <MovieList movies={movies} state={location} />
        </div>
    )
};
export default HomePage;


{/* <ul className={s.list}>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            width="150"
                        />
                    </li>
                ))}
          </ul> */}