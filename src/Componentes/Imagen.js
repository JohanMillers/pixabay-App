import React from 'react';
import './Imagen.css';

const Imagen = ({imagen}) => {

    // extraer imagen
    const { largeImageURL, likes, previewURL, tags, views  } = imagen;
    return (
        <div className = "grid-gallery__item">
                <img src={largeImageURL} alt={tags} className= "grid-gallery__image" />
        </div>
      );
}
 
export default Imagen;