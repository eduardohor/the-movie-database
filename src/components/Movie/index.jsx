import styles from "./styles.module.scss";
import { MovieIdContext } from "../Context/MovieIdProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export function Movie(props) {
  const [moviesId, setMoviesId] = useContext(MovieIdContext);

  return (
    <>
      <Link to={`/details`}>
        <article
          className={styles.movies}
          onClick={() => setMoviesId(props.id)}
        >
          <img src={IMG_API + props.poster_path} alt={props.title} />
          <div>
            <h3>{props.title}</h3>
            <span>{props.release_date}</span>
          </div>
        </article>
      </Link>
    </>
  );
}
