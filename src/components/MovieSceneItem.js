import React from "react";
import "../styles/layout/_movie_scene_item.scss";
import "../styles/core/_reset.scss";
import { Link } from "react-router-dom";

function MoviesSceneItems(props) {
  return (
    <Link className="card__link" to={`/${props.film.id}`}>
      <img
        className='card__image'
        alt={props.film.movie}
        src={props.film.poster}
      />
      <h4 className='card__title'>{props.film.movie}</h4>
      <p className='card__description'>"{props.film.fullline}"</p>
      <p className='card__year'>{props.film.year}</p>
    </Link>
  );
}

export default MoviesSceneItems;
