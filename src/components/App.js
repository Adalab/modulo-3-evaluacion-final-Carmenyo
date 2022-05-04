import React from 'react';
import '../styles/App.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MoviesSceneList from './MoviesSceneList';
import FilterByName from './Filters';


function App() {
  const [dataFilms, setDataFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState ("");

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setLoading(false);
      console.log(dataFromApi)
      const orderedFilms = dataFromApi.sort((a,b)=>
      a.movie > b.movie ? 1: a.movie < b.movie ? -1 :0);
       return setDataFilms(orderedFilms)
    });
    
  }, []);

  const filteredData = dataFilms.filter
  (film => film.movie.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <div className="app">
    <FilterByName search={search} setSearch={setSearch}/>
    <section>
    {loading ? <div className='app__loading'>Cargando...</div> : < MoviesSceneList films = {filteredData} />}
    </section> 
    </div>
  );
}

export default App;
