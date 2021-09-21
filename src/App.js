import React, {useState,useEffect} from 'react';
import Formulario from './Componentes/Formulario';
import ListadoImagenes from './Componentes/ListadoImagenes';



function App() {

  //state de la appp

  const [busqueda, setBusqueda] = useState('naturaleza');
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalpagina, setTotalPagina] = useState(1);
 
  useEffect(() => {
    const consultarApi = async () => {
      if(busqueda === '') return;

    const imagenesPorPaginas = 30;
    const key = '23479006-db7fc05de85556f0aae411037';
    const Url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPaginas}&page=${paginaActual}`;

    const respuesta = await fetch(Url)
    const resultado = await respuesta.json();

    setImagenes(resultado.hits);
    //calcular el total de paginas
    const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPaginas);
    setTotalPagina(calcularTotalPaginas);

    // Mover la pantalla hacia arriba
    const jumbotron = document.querySelector('.jumbotron');
    jumbotron.scrollIntoView({behavior:'smooth'})

    }
    consultarApi();


  }, [busqueda, paginaActual])


  //Definir la pagina anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaActual -1;

    if(nuevaPaginaActual === 0 ) return null;

    setPaginaActual(nuevaPaginaActual);
    
  }

  //Definir pagina siguientes

  const paginaSiguientes = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual > totalpagina) return;



    setPaginaActual(nuevaPaginaActual);

  }



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
      {(paginaActual === 1 ) ? null : (
        <button
        type="button"
        className="btn btn-info mr-2 mt-3"
        onClick={paginaAnterior}
        
        >
          &laquo;  Anterior 
        
      </button>
      )}

      {(paginaActual === totalpagina) ? null : (
         <button
         type="button"
         className="btn btn-info mr-1 mt-3"
         onClick={paginaSiguientes}
         >
           Siguientes &raquo;
       </button>
      )}

    </div>
  </div>
    
    
  );
}

export default App;
