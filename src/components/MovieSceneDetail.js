import React from "react";
import "../styles/core/_reset.scss";
import "../styles/layout/_movie_scene_details.scss";
import storage from "../services/localStorage";

function MovieSceneDetail(props) {
  const film = storage.get(props.id) || props.film;

  storage.set(props.id, film);

  return (
    <section className='singleCard'>
     
      <img className='singleCard__image' alt={film.movie} src={film.poster} />

      <div className='singleCard__data'>
 
        <h4 className='singleCard__title'>{film.movie}</h4>
        <p className='singleCard__description'>"{film.fullline}"</p>

        <p className='singleCard__director'>Director: {film.director}</p>
        <audio controls>
          <source src= {film.audio} type='audio/mp3'/>
        </audio>
      </div>
    </section>
  );
}

export default MovieSceneDetail;
