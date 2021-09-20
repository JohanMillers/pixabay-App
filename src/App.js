import React, {useState,useEffect} from 'react';
import Formulario from './Componentes/Formulario';
import ListadoImagenes from './Componentes/ListadoImagenes';



function App() {

  //state de la appp

  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
 
  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return;

    const imagenesPorPaginas = 30;
    const key = '23479006-db7fc05de85556f0aae411037';
    const Url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPaginas}`;

    const respuesta = await fetch(Url)
    const resultado = await respuesta.json();

    setImagenes(resultado.hits);
    

    }
    consultarApi();


  }, [busqueda])




  return (
  <div className ="container">
    <div className = "jumbotron">
      <p className =" lead text-center">Buscador de Imágenes</p>
      <Formulario
      setBusqueda = {setBusqueda}
      
      />
    </div>

    <div className = "row justify-content-center">
      <ListadoImagenes 
      imagenes={imagenes}
      
      />

    </div>
  </div>
    
    
  );
}

export default App;
