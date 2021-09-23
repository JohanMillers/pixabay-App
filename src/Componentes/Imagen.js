import React from 'react';
import './Imagen.css';

const Imagen = ({imagen}) => {

    // Extraer datos de la imagenes
<<<<<<< HEAD
    const { largeImageURL, tags  } = imagen;
=======
    const { largeImageURL, likes,  tags, views  } = imagen;
>>>>>>> master
    return (
       
        <a href={largeImageURL} target = "_blank" without rel="noreferrer"  className = "grid-gallery__item">
            <img src={largeImageURL} alt={tags} className= "grid-gallery__image" />
        </a>
        
        
        
      );
}
 
export default Imagen;