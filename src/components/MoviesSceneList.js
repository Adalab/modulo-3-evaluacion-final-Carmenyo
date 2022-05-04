import React from "react";
import MoviesSceneItems from "./MovieSceneItem"

function MoviesSceneList(props) {
  const filmElements = props.films.map((film) => {
    return (
      <li className='card'>
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
