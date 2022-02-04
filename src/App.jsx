import { Logo, Main } from "./styles/styles";

import imgLogo from "./assets/img/logo.svg";

import { Header } from "./components/Header/index";
import { Movie } from "./components/Movie/index";

import { api } from "./services/api";
import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination/index";

function App() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    api
      .get(
        `popular?api_key=3258f70f095dee3eb5d2d1720042adc3&language=pt-br&page=${currentPage}`
      )
      .then(({ data }) => {
        setMovies(data.results);
        console.log(data);
      });
  }, [currentPage]);

  return (
    <div>
      <Logo>
        <img src={imgLogo} alt="Logo TMDB" />
      </Logo>
      <Header />

      <Main>
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </Main>

      <Pagination
        movies={movies}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
}

export default App;
