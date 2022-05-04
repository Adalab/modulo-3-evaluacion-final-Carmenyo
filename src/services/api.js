function getDataApi() {
    return fetch('https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50')
      .then((response) => response.json())
      .then((json) => {
        const data = json.map((wow) => {
          return {
            movie: wow.movie,
            year: wow.year,
            director: wow.director,
            fullline: wow.full_line,
            poster: wow.poster,
            audio: wow.audio,
          };
        });
        return data;
      });
  }
  export default getDataApi;