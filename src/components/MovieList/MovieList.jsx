import { NavLink, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";




const MovieList = ({ movies }) => {
    const location = useLocation()

     if (!movies || movies.length === 0) {
    return <p className={s.error}>Немає фільмів для відображення</p>;
  }
    return (
        <ul className={s.list}>
            {movies.map((movie) => (
                <li key={movie.id} className={s.listItem}>
                    <NavLink 
                        to={`/movies/${movie.id}`} 
                        state={{ from: location }}
                    >
                        {movie.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};
export default MovieList;