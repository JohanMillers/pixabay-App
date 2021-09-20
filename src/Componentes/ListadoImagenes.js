import React from 'react';
import Imagen from './Imagen';
import './ListadoImagenes.css';




const ListadoImagenes = ({imagenes}) => {
    return ( 
        <div className = "grid-gallery">
           {imagenes.map(imagen => (

                 <Imagen
                     key={imagen.id} 
                    imagen={imagen}
                  />

                  ))}
           </div>
     );
}
 
export default ListadoImagenes;