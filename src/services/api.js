import { v4 as uuidv4 } from "uuid";

const getApiData = () => {
  return fetch(
    "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
  )
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((film, i) => {
        return {
          id: uuidv4(),
          movie: film.movie,
          year: film.year,
          director: film.director,
          fullline: film.full_line,
          poster: film.poster,
          audio: film.audio,
        };
      });
      return dataClean;
    });
};
export default getApiData;
