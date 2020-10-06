import React, {useState} from 'react'; 
import { AddCategory } from './AddCategory';
import GifGrid from './GifGrid';

//Functional Component
const GifExpertApp = ( ) => {
    const [categories, setCategories] = useState(['Sherlock']);
    
 /*    const handleAdd = ()=>{
        // setCategories([...categories,'Education']  ); //Primera opcion
        setCategories( (cats)=> [...cats, 'Education'] ); //Segunda opcion

        //Cats es el valor anterior del estado.
    } */

    return (
        <>
        <div className="titulo">
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={ setCategories }/>
        </div>
        <div className="container">
            <ol>
                {
                    categories.map((category)=>{
                        return <GifGrid 
                        key={category} 
                        category={category} />
                    })
                }
            </ol>
        </div>
        </>
        );
}

export default GifExpertApp;