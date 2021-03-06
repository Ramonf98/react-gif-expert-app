import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ( { title, url} ) => {
    return (
        <div className="gifCard animate__animated animate__fadeIn ">
            <img 
            className="gif" 
            src={url} 
            alt="Gif No cargado">
            </img>
            
            <p className="gifTitle">
                {title}
            </p>
        </div>
    )
}
GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}
export default GifGridItem

