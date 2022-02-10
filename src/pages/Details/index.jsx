import { useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { LogoType } from "../../components/LogoType";
import { api } from "../../services/api";
import { MovieIdContext } from "../../components/Context/MovieIdProvider";
import { Link } from "react-router-dom";

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

  const idRecomendation = recommendations.map((id) => {
    return id.id;
  });

  const news = recommendations
    .map((movies) => {
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

      const data = new Date(movies.release_date);

      let day = String(data.getDate()).padStart(2, "0");
      let month = meses[data.getMonth()];
      let year = data.getFullYear();
      return (
        <Link to={`/details`} className={styles.linkRecommendations}>
          <div
            className={styles.movieRecommendations}
            onClick={() => {
              setMoviesId(movies.id);
            }}
          >
            <img src={IMG_API + movies.poster_path} alt={movies.title} />
            <h3>{movies.title}</h3>
            <span>{day + " " + month + " " + year}</span>
          </div>
        </Link>
      );
    })
    .slice(0, 6);

  const director = crew
    .filter((j) => {
      return j.job === "Director";
    })
    .map((n) => {
      return n.name;
    })
    .slice(0, 1);

  const screenPlay = crew.filter((j) => {
    return j.job === "Writer";
  });

  const data = new Date(movieDetails.release_date);

  let day = String(data.getDate()).padStart(2, "0");
  let month = String(data.getMonth() + 1).padStart(2, "0");
  let year = data.getFullYear();

  const hours = Math.floor(movieDetails.runtime / 60);
  const minutes = movieDetails.runtime % 60;

  const percentage = (number) => {
    let avaliateMax = 10;
    let percent = avaliateMax * number;
    return avaliateMax;
  };

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

      <header className={styles.header}>
        <img src={IMG_API + filePath} alt="Logo" />
        <section className={styles.text}>
          <h1>{movieDetails.title + `(${year})`}</h1>
          <div className={styles.classification}>
            <ul>
              <li key={movieDetails.id}>
                {day + "/" + month + "/" + year} (BR)
              </li>
              <li key={movieDetails.release_date}>
                {genres.map((genre) => {
                  return genre.name + ", ";
                })}
              </li>

              <li key={movieDetails.imdb_id}>{hours + "h " + minutes + "m"}</li>
            </ul>
          </div>
          <div className={styles.assessment}>
            <div>{movieDetails.vote_average}</div>
            <span>
              Avaliação dos <br /> usuários
            </span>
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
              <h3>{director}</h3>
              <span>Director</span>
            </div>

            {screenPlay
              .map((writer) => {
                return (
                  <div>
                    <h3>{writer.name}</h3>
                    <span>Screenplay</span>
                  </div>
                );
              })
              .slice(0, 2)}
          </div>
        </section>
      </header>

      <main className={styles.main_details}>
        <section>
          <h2>Elenco original</h2>
          <div className={styles.container_cast}>{cardCast}</div>
        </section>
        <section className={styles.trailer}>
          <h2>Trailer</h2>
          <iframe
            width="100%"
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
