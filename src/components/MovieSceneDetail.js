import React from "react";
// import {AiTwotoneSound} from "react-icons/ai"
import "../styles/core/_reset.scss";
import storage from "../services/localStorage";

function MovieSceneDetail(props) {
  const film = storage.get(props.id) || props.film;

  storage.set(props.id, film);

  return (
    <>
      <img className='card__image--detail' alt={film.movie} src={film.poster} />
      <h4 className='card__title--detail'>{film.movie}</h4>
      <p className='card__description--detail'>{film.fullline}</p>
      <p className='card__year--detail'>{film.year}</p>
      <p className='card__director--detail'>{film.director}</p>
    </>
  );
}

export default MovieSceneDetail;
