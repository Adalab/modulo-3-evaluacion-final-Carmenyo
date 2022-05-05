import React from "react";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import "../styles/App.scss";
import getApiData from "../services/api";
import { useEffect, useState } from "react";
import MoviesSceneList from "./MoviesSceneList";
import Filters from "./Filters";
import Header from "./Header";
import "../styles/core/_reset.scss";
import MovieSceneDetail from "./MovieSceneDetail";

function App() {
  const [dataFilms, setDataFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("All");

  const { pathname } = useLocation();
  const dataPath = matchPath("/:id", pathname);

  const filmId = dataPath !== null ? dataPath.params.id : null;
  const filmFound = dataFilms.find((item) => item.id === filmId);

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

    });

  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route
          path='/'
          element={
            <>
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
            </>
          }
        />
        <Route
          path='/:id'
          element={<MovieSceneDetail film={filmFound} id={filmId} />}
        />
      </Routes>
    </div>
  );
}
export default App;
