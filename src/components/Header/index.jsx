import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Head } from "../Head/styles";
import { Title } from "./styles";

export function Header(props) {
  const [genres, setGenres] = useState([]);
  const [genreId, setGenreId] = useState([]);

  function handleFilter(genre) {
    console.log(props.moviesId.filter((id) => id.genre_ids.fo));
  }

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
      <Head align_items={"center"} justify_content={"center"}>
        <Title>
          <h1>
            Milhões de filmes, séries e pessoas para descobrir. Explore já.
          </h1>
          <p>FILTRE POR:</p>
          <ul>
            {genres.length > 0 &&
              genres.map((genre) => {
                return (
                  <li key={genre.id}>
                    <button onClick={() => handleFilter(genre)}>
                      {genre.name}
                    </button>{" "}
                  </li>
                );
              })}
          </ul>
        </Title>
      </Head>
    </>
  );
}
