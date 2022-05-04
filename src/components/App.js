import '../styles/App.scss';
import getDataApi from '../services/api';
import { useEffect, useState } from 'react';



function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    getDataApi().then((apiData) => {
      setData(apiData);
      console.log(apiData)
    
    });
  }, []);

  return (

    <>
   
    </>
  );
}

export default App;
