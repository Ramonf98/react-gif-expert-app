const getGifs = async ( category ) => {
    const url    =  `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=8&api_key=EzOt9YB7wuEldUC2xAtzIa3HBDB2pX2k`;
    const resp   =  await fetch( url );
    const {data} =  await resp.json();

    //Creamos un objeto que contendra los datos que nos importan de la respuesta de la peticion.
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            //Preguntamos si vienen las imagenes en la peticion con ?
        }
    });

    return gifs;
    
}

export default getGifs;
