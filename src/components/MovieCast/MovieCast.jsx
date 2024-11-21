import { useEffect, useState } from "react";
import s from "./MovieCast.module.css"
import { fetchMovieCredits } from "../../../api";
import { useParams } from "react-router-dom";



const MovieCast = () => {

    const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data.cast || []);
      } catch (err) {
        setError("Не вдалося завантажити акторський склад.");
      }
    };
    getCast();
  }, [movieId]);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Акторський склад</h2>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.item}>
            {actor.profile_path && (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={s.photo}
              />
            )}
            <p>{actor.name}</p>
            <p>Роль: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default MovieCast