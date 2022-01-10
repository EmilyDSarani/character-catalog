import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router';
import Characters from './Characters'

it('should render characters', () => {
    const { container } = render(
    <MemoryRouter> 
    <Characters characters={[    
    {
    name: 'Sarani',
    id: 1,
    image:'https://place-puppy.com/'
}
    ]}/>
    </MemoryRouter> 
    );
    expect(container).toMatchSnapshot();
});

//Data Type- type of data
//primatives
//the strings, number, arrays, objects, booleans, undefined/null 

//when memoryrouter is not there, the error is "cant use link outside of a router"