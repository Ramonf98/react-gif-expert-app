import React from 'react';
import GifGridItem from './GifGridItem';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../Hooks/useFetchGifs';

const GifGrid = ({category}) => {

    const { data, loading } = useFetchGifs( category );

    //Retorno del componente al DOM
    return (
        <div>
            <h3 className="categoryName animate__animated animate__fadeInDown" >{ category.toUpperCase() }</h3>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            
            <div className="gifsContainer" >
                {
                    //Añadiendo los gif al DOM
                    data.map( (img)=>{
                        return <GifGridItem 
                                key={img.id}
                                {...img} //Le enviamos el id, title y url de manera independiente.
                                />
                    })
                }
            </div>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
export default GifGrid;
