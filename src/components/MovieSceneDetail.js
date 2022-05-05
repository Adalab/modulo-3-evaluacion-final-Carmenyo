import React from "react";
// import {AiTwotoneSound} from "react-icons/ai"
import "../styles/core/_reset.scss"

function MovieSceneDetail(props) {
    
    return (
            <>
           
            <img className="card__image--detail" alt={props.film.movie} src={props.film.poster} />
              <h4 className="card__title--detail">{props.film.movie}</h4>
              <p className="card__description--detail">{props.film.fullline}</p>
              <p className="card__year--detail">{props.film.year}</p>
              <p className="card__director--detail">{props.film.director}</p>
              

            </>
          );
    
}

export default MovieSceneDetail;