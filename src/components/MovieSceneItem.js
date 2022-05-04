import React from "react";
import "../styles/layout/_movie_scene_item.scss"

function MoviesSceneItems (props) {
    return (
      <>
      <a href = "#">
        <img className="card__image" alt={props.film.movie} src={props.film.poster} />
        </a>
        <h4 className="card__title">{props.film.movie}</h4>
        <p className="card__description">{props.film.fullline}</p>
        <p className="card__year">{props.film.year}</p>
      </>
    );
  };
  
  export default MoviesSceneItems ;