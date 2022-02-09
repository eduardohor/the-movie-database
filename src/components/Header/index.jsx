import { useEffect, useState } from "react";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

export function Header() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    api
      .get(
        `genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br`
      )
      .then(({ data }) => {
        setGenres(data.genres);
        console.log(data);
      });
  }, []);

  return (
    <>
      <header className={styles.headerHome}>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <div>
          <p>FILTRE POR:</p>
        </div>
        <ul>
          {genres.length > 0 &&
            genres.map((genre) => {
              return (
                <li className={styles.listMovie} key={genre.id}>
                  <button>{genre.name}</button>{" "}
                </li>
              );
            })}
        </ul>
      </header>
    </>
  );
}
