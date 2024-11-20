import { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import s from "./MovieDeteilsPage.module.css"

const MovieDetailsPage = () => {
    useEffect(() => {
        document.title = "BEST CODERS | MovieDetailsPage";
    }, []);
  return (
      <div>
          <h2>Movie Details Page</h2>
          <nav className={s.nav}>
              <NavLink to="MovieCast">MovieCast</NavLink>
              <NavLink to="MovieReviews">MovieReviews</NavLink>
          </nav>
          <Outlet />
         
      </div>
  )
}

export default MovieDetailsPage