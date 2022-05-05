import React from "react";
import MoviesSceneItems from "./MovieSceneItem";
import "../styles/layout/_movie_Scene_List.scss";

function MoviesSceneList(props) {
  const filmElements = props.films.map((film, id) => {
    return (
      <li key={id} className='card'>
        <MoviesSceneItems film={film} />
      </li>
    );
  });

  return (
    <>
      <section>
        <ul className='cards'> {filmElements}</ul>
      </section>
    </>
  );
}

export default MoviesSceneList;
