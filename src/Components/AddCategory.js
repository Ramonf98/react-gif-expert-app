import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ( { setCategories } ) => {
    //State
    const [ inputValue, setInputValue ] = useState('');
    //Manejo del valor del Input
    const handledInputValue = (e)=>{
        return setInputValue( e.target.value );
    }
    //Manejo del evento Submit
    const handleSubmit = (e)=>{
        e.preventDefault();
        if( inputValue.trim().length > 2){
            setCategories( (cats) => [ inputValue, ...cats] );
            setInputValue('');
        }
    }


    return (
        <form onSubmit={ handleSubmit }>
            <input 
            value={inputValue}
            onChange={handledInputValue} //Se dispara cada vez que la caja de texto cambie
            className="inputCategory" 
            type="text">
            </input>
        </form>
    )
}


AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired,
}
