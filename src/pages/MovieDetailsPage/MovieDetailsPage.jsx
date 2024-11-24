import { Suspense, useEffect, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import s from "./MovieDeteilsPage.module.css"
// import { fetchMoviesByKeyword } from '../../../api';
import { fetchMovieDetails } from "../../../api"


const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
     const navigate = useNavigate();
    console.log(location);
    const goBackLink = useRef(location.state ?? "/movies");
    
     useEffect(() => {
        const getMovieDetails = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch {
                setError("Не вдалося завантажити деталі фільму");
            }
        };
        getMovieDetails();
    }, [movieId]);
   
    if (!movie) {
        return <p>Завантаження...</p>;
    }
    if (error) return <p>{error}</p>

    const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "N/A";
    const userScore = Math.round(movie.vote_average * 10);
    const genres = movie.genres?.map(genre => genre.name).join(", ") || "N/A";

  return (
      <div className={s.infoFilm}>
        
          <div className={s.block}> 
          
          <img  className={s.img}
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width="300"
          />
          
          <div>
              
                <h2>{movie.title} ({year})</h2>
                <p className={s.info}>User Score: {userScore}%</p>
                <div className={s.info}>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <p>Genres: {genres}</p>
                </div>
            
          </div>
      
          </div>
      <div>
              <nav className={s.nav}>
              <NavLink to="MovieCast" state={location.state}>MovieCast</NavLink>
              <NavLink to="MovieReviews" state={location.state} >MovieReviews</NavLink>
                   <Link to={goBackLink.current}>Go back</Link>
                  {/* <button className={s.button} onClick={() => navigate(-1)}>← Назад</button> */}
                 
              </nav>
              <Suspense fallback={<h2>Завантаження...</h2>}>
                  <Outlet />
              </Suspense>
          </div>
      </div>
      
  )
}

export default MovieDetailsPage