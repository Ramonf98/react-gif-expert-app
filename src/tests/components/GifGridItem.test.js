import { shallow } from 'enzyme';
import React from 'react';
import GifGridItem from '../../Components/GifGridItem'; //Componente a probar
import '@testing-library/jest-dom'; //Para ayuda con autocompletado


describe('Pruebas en el archivo GifGridItem.js',()=>{
    const title = 'Batman';
    const url = 'https://www.google.com';
    const wrapper = shallow(<GifGridItem title={title} url={url} />)

    test('Deben mostrar <GifGridItem /> correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    })


    test('El title debe estar en un p, parrafo ', () => {
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
    })

    test('El src de la imagen debe ser igual a la url, y el alt debe ser igual "Gif No cargado" ', () => {
        
        const img = wrapper.find('img');
        const {src, alt} = img.props();
        expect(src).toBe( url );
        expect(alt).toBe('Gif No cargado');
        
    })

    test('Debe tener la clase animate_fadeIn ', () => {
        const div = wrapper.find('div');
        
        expect( div.hasClass('animate__fadeIn') ).toBeTruthy();
    })
    

})