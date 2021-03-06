import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { LogoType } from "../../components/LogoType";
import { Movie } from "../../components/Movie";
import { Pagination } from "../../components/Pagination";
import { api } from "../../services/api";
import styles from "./styles.module.scss";

export function Home() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState([]);

  useEffect(() => {
    api
      .get(
        `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=pt-br&page=${currentPage}`
      )
      .then(({ data }) => {
        setMovies(data.results);
        setTotalPages(data.total_pages);
        console.log(data);
      });
  }, [currentPage]);

  return (
    <div>
      <LogoType />

      <Header movies={movies} moviesId={setMovies} />

      <main className={styles.mainHome}>
        {movies.length > 0 && movies.map((movie) => <Movie {...movie} />)}
      </main>

      <Pagination
        movies={movies}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      ></Pagination>
    </div>
  );
}
