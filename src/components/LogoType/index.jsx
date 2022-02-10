import styles from "./styles.module.scss";
import imgLogo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";

export function LogoType() {
  return (
    <div className={styles.logo}>
      <Link to={"/the-movie-database"}>
        <img src={imgLogo} alt="Logo TMDB" />
      </Link>
    </div>
  );
}
