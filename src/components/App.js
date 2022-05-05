import React from "react";
import "../styles/App.scss";
import getApiData from "../services/api";
import { useEffect, useState } from "react";
import MoviesSceneList from "./MoviesSceneList";
import Filters from "./Filters";
import Header from "./Header";
import "../styles/core/_reset.scss";

function App() {
  const [dataFilms, setDataFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("All");

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setLoading(false);
      console.log(dataFromApi);
      const orderedFilms = dataFromApi.sort((a, b) =>
        a.movie > b.movie ? 1 : a.movie < b.movie ? -1 : 0
      );
      return setDataFilms(orderedFilms);
    });
  }, []);

  const getYears = () => {
    const filmsYears = dataFilms.map((film) => film.year);

    const uniqueYears = filmsYears
      .filter((year, index) => {
        return filmsYears.indexOf(year) === index;
      })
      .sort((a, b) => a - b);
    return uniqueYears;
  };

  const filteredData = dataFilms
    .filter((film) => film.movie.toLowerCase().includes(search.toLowerCase()))
    .filter((film) => {
      if (select === "All") {
        return true;
      }

      return parseInt(film.year) === parseInt(select);
    });

  // .filter((film) => {
  //   if (select === "All") {
  //     return true;
  //   } else if (select === film.year) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  return (
    <div className='app'>
      <Header />
      <Filters
        search={search}
        setSearch={setSearch}
        setSelect={setSelect}
        years={getYears()}
      />
      <section>
        {loading ? (
          <div className='app__loading'>Cargando...</div>
        ) : filteredData.length === 0 ? (
          <h2 className='app__noresults'>
            No se han encontrado resultados para tu consulta
          </h2>
        ) : (
          <MoviesSceneList films={filteredData} />
        )}
      </section>
    </div>
  );
}
export default App;
