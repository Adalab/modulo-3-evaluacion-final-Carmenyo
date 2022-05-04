import React from 'react';
import '../styles/App.scss';
import getApiData from '../services/api';
import { useEffect, useState } from 'react';
import MoviesSceneList from './MoviesSceneList';


function App() {
  const [dataFilms, setDataFilms] = useState([]);

  useEffect(() => {
    getApiData().then((dataFromApi) => {
      console.log(dataFromApi)
      const orderedFilms = dataFromApi.sort((a,b)=>
      a.movie > b.movie ? 1: a.movie < b.movie ? -1 :0);
       return setDataFilms(orderedFilms)
    });
  }, []);

  return (
    <>
    <h1 className='list__title'>Listado</h1>
    <MoviesSceneList films = {dataFilms}/>
    </>
  );
}

export default App;
