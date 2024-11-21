import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../../api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data.results || []);
      } catch (err) {
        setError("Не вдалося завантажити огляди.");
      }
    };
    getReviews();
  }, [movieId]);

  if (error) return <p>{error}</p>;

  if (reviews.length === 0) return <p>Оглядів ще немає.</p>;

  return (
    <div>
      <h2>Огляди</h2>
      <ul className={s.list}>
        {reviews.map((review) => (
          <li key={review.id} className={s.item}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;