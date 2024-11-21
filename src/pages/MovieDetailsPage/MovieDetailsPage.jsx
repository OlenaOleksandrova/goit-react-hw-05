import { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom';
import s from "./MovieDeteilsPage.module.css"
import { fetchMoviesByKeyword } from '../../../api';



const MovieDetailsPage = () => {
    const { movieId } = useParams();
    // const [user, setUser] = useState(null);

     const [movie, setMovie] = useState(null); // Стан для фільму
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     document.title = "BEST CODERS | MovieDetailsPage";

    //     const getData = async () => {
    //         const data = await fetchMoviesByKeyword(movieId);
    //         setUser(data);
    //     };
    //     getData();
    // }, [movieId]);
    
     useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMoviesByKeyword(movieId);
                setMovie(data);
            } catch (err) {
                setError("Не вдалося завантажити деталі фільму");
            }
        };
        getMovieDetails();
    }, [movieId]);

    // if (!user) {
    //     return <h2>Loading data...</h2>
    // }
   
    if (!movie) {
        return <p>Завантаження...</p>;
    }

  return (
      <div>
          <h2>Movie Details Page </h2>
          {/* <button onClick={() => navigate(-1)}>← Назад</button> */}
          
    
         <div>
              <h2>{movie.title}</h2>
              <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width="300"
                />
            <p>{movie.overview}</p>
            <p>Рейтинг: {movie.vote_average}</p>
            <p>Дата релізу: {movie.release_date}</p>
         </div>
        
            
                
          <nav className={s.nav}>
              <NavLink to="cast">MovieCast</NavLink>
              <NavLink to="MovieReviews">MovieReviews</NavLink>
          </nav>
          <Outlet />
         
      </div>
  )
}

export default MovieDetailsPage