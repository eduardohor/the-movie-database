import { Logo, Head } from "./styles";
import imgLogo from "../assets/img/logo.svg";

export function Header() {
  return (
    <>
      <Logo>
        <img src={imgLogo} alt="Logo TMDB" />
      </Logo>

      <Head>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <p>FILTRE POR:</p>
        <ul>
          <li>
            <a href="">Ação</a>
          </li>
          <li>
            <a href="">Aventura</a>
          </li>
          <li>
            <a href="">Animação</a>
          </li>
          <li>
            <a href="">Comédia</a>
          </li>
          <li>
            <a href="">Crime</a>
          </li>
          <li>
            <a href="">Documentário</a>
          </li>
          <li>
            <a href="">Drama</a>
          </li>
          <li>
            <a href="">Família</a>
          </li>
          <li>
            <a href="">Fantasia</a>
          </li>
          <li>
            <a href="">História</a>
          </li>
          <li>
            <a href="">Terror</a>
          </li>
          <li>
            <a href="">Música</a>
          </li>
          <li>
            <a href="">Mistério</a>
          </li>
          <li>
            <a href="">Romance</a>
          </li>
          <li>
            <a href="">Ficcção científica</a>
          </li>
          <li>
            <a href="">Cinema TV</a>
          </li>
          <li>
            <a href="">Thriller</a>
          </li>
          <li>
            <a href="">Guerra</a>
          </li>
          <li>
            <a href="">Faroeste</a>
          </li>
        </ul>
      </Head>
    </>
  );
}
