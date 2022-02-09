import { useContext, useEffect, useState } from "react";
import { Head } from "../../components/Head/styles";
import styles from "./styles.module.scss";
import { LogoType } from "../../components/LogoType";

import { api } from "../../services/api";
import { MovieIdContext } from "../../components/Context/MovieIdProvider";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export function Details() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [genres, setGenres] = useState([]);
  const [poster, setPoster] = useState([]);
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [recommendations, setRecommendations] = useState([]);

  const [moviesId, setMoviesId] = useContext(MovieIdContext);

  const cardCast = cast.map((card) => {
    return (
      <div className={styles.cards}>
        <img
          src={IMG_API + card.profile_path}
          alt={`Foto do(a) ${card.name}`}
        />
        <h4>{card.name}</h4>
        <span>{card.character}</span>
      </div>
    );
  });

  const keyTrailer = trailer
    .map((res) => {
      return res.key;
    })
    .slice(0, 1);

  const filePath = poster
    .map((id) => {
      return id.file_path;
    })
    .slice(0, 1);

  const news = recommendations
    .map((movies) => {
      return (
        <div className={styles.movieRecommendations}>
          <img src={IMG_API + movies.poster_path} alt={movies.title} />
          <h3>{movies.title}</h3>
          <span>{movies.release_date}</span>
        </div>
      );
    })
    .slice(0, 6);

  useEffect(() => {
    api
      .get(
        `movie/${moviesId}?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br&append_to_response=credits,videos`
      )
      .then(({ data }) => {
        setMovieDetails(data);
        setGenres(data.genres);
        setCast(data.credits.cast);
        setCrew(data.credits.crew);
        setTrailer(data.videos.results);
        console.log(data);
      });
  }, [moviesId]);

  useEffect(() => {
    api
      .get(
        `movie/${moviesId}/images?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br-br&include_image_language=pt-br,null`
      )
      .then(({ data }) => {
        setPoster(data.posters);
        console.log(data);
      });
  }, [moviesId]);

  useEffect(() => {
    api
      .get(
        `movie/${moviesId}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br&page=1`
      )
      .then(({ data }) => {
        setRecommendations(data.results);
        console.log(data.results);
      });
  }, [moviesId]);

  return (
    <>
      <LogoType />
      <Head>
        <header className={styles.header}>
          <img src={IMG_API + filePath} alt="Logo" />
          <section className={styles.text}>
            <h1>{movieDetails.title + `(${movieDetails.release_date})`}</h1>
            <div className={styles.classification}>
              <ul>
                <li key={movieDetails.id}>{movieDetails.release_date}(BR) </li>

                {genres.map((genre, indice) => {
                  return <li key={indice}>{genre.name}</li>;
                })}

                <li key={movieDetails.imdb_id}>{movieDetails.runtime}</li>
              </ul>
            </div>
            <div className={styles.assessment}>
              <div>{movieDetails.vote_average}</div>
              <span>Avaliação dos usuários</span>
            </div>
            <div className={styles.sinopse}>
              <h3>Sinopse</h3>
              <p>{movieDetails.overview}</p>
            </div>
            <div className={styles.credits}>
              {cast
                .map((cast) => {
                  return (
                    <div>
                      <h3>{cast.name}</h3>
                      <span>Characters</span>
                    </div>
                  );
                })
                .slice(0, 2)}

              <div>
                <h3>Tim Miller</h3>
                <span>Director</span>
              </div>
            </div>
            <div className={styles.screenplay}>
              <div>
                <h3>Rhett Reese</h3>
                <span>Screenplay</span>
              </div>
              <div>
                <h3>Paul Wernick</h3>
                <span>Screenplay</span>
              </div>
            </div>
          </section>
        </header>
      </Head>

      <main className={styles.main_details}>
        <section>
          <h2>Elenco original</h2>
          <div className={styles.container_cast}>{cardCast}</div>
        </section>
        <section className={styles.trailer}>
          <h2>Trailer</h2>
          <iframe
            width="900"
            height="500"
            src={`https://www.youtube.com/embed/${keyTrailer}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </section>
        <section className={styles.recommendations}>
          <h2>Recomendações</h2>
          <div>{news}</div>
        </section>
      </main>
    </>
  );
}
