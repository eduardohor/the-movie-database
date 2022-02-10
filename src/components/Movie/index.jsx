import styles from "./styles.module.scss";
import { MovieIdContext } from "../Context/MovieIdProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export function Movie(props) {
  const [moviesId, setMoviesId] = useContext(MovieIdContext);

  let meses = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ",
  ];

  const data = new Date(props.release_date);

  let day = String(data.getDate()).padStart(2, "0");
  let month = meses[data.getMonth()];
  let year = data.getFullYear();

  return (
    <>
      <Link to={`/the-movie-database/details`} className={styles.link}>
        <article
          className={styles.movies}
          onClick={() => setMoviesId(props.id)}
        >
          <img src={IMG_API + props.poster_path} alt={props.title} />
          <div>
            <h3>{props.title}</h3>
            <span>{day + " " + month + " " + year}</span>
          </div>
        </article>
      </Link>
    </>
  );
}
