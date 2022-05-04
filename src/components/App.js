import React from 'react';
import '../styles/App.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MoviesSceneList from './MoviesSceneList';


function App() {
  const [dataFilms, setDataFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      setLoading(false);
      console.log(dataFromApi)
      const orderedFilms = dataFromApi.sort((a,b)=>
      a.movie > b.movie ? 1: a.movie < b.movie ? -1 :0);
       return setDataFilms(orderedFilms)
    });
    
  }, []);

  return (
    <div className="app">
    <section>
    {loading ? <div className='app__loading'>Cargando...</div> : < MoviesSceneList films = {dataFilms} />}
    </section> 
    </div>
  );
}

export default App;
