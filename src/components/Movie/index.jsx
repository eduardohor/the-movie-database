import { Poster } from "./styles";

const IMG_API = "https://image.tmdb.org/t/p/w500";

export function Movie(props) {
  return (
    <>
      <Poster>
        <img src={IMG_API + props.poster_path} alt={props.title} />
        <div>
          <h3>{props.title}</h3>
          <span>{props.release_date}</span>
        </div>
      </Poster>
    </>
  );
}
