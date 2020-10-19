const { default: getGifs } = require("../../helpers/getGifs");
import '@testing-library/jest-dom'; //Para ayuda con autocompletado

describe('Pruebas con getGifs Fetch', () => {
    
    test('debe de traer 8 elementos', async()=>{

        const gifs = await getGifs('Batman');

        expect( gifs.length ).toBe(8);

    })

        
    test('debe de traer 0 elementos', async()=>{

        const gifs = await getGifs('');
        console.log(gifs);
        expect( gifs.length ).toBe( 0 );

    })

})
