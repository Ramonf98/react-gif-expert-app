import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../Components/AddCategory'; //Componente a probar
import '@testing-library/jest-dom'; //Para ayuda con autocompletado


describe('Pruebas en el componente AddCategory', () => {
    
    const setCategories = () =>{};
    const wrapper = shallow(<AddCategory setCategories = {setCategories} />);


    test('Debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot(); 
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change',{ 
            target: {
                value,
            }
        });

        expect( wrapper.find('p').text().trim() ).toBe(value);

    })
    

})
