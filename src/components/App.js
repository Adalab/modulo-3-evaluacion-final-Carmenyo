import React from "react";
import "../styles/App.scss";
import getApiData from "../services/api";
import { useEffect, useState } from "react";
import MoviesSceneList from "./MoviesSceneList";
import Filters from "./Filters";
import Header from "./Header";
import "../styles/core/_reset.scss"

function App() {
  const [dataFilms, setDataFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState ("")

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

  const filteredData = dataFilms
   .filter((film) => {
    return(
    film.movie.toLowerCase().includes(search.toLowerCase()))
  });

  
 console.log(filteredData)
  return (
    <div className='app'>
      <Header />
      <Filters search={search} setSearch={setSearch} year = {year} setYear = {setYear}  />
      <section>
        {loading ? (
          <div className='app__loading'>Cargando...</div>
        ) : 
        
        ( filteredData.length === 0 ? <h2 className="app__noresults"> No se han encontrado resultados para tu consulta</h2> :
          <MoviesSceneList films={filteredData} />
          // <AiTwotoneSound/>
        )}
      </section>
    </div>
  );
}

export default App;
