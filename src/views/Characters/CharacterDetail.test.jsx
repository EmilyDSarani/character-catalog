import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import CharacterDetail from './CharacterDetail';
//mock out the testing so that when internet fails, your tests do not. 
//this is because this test is directly hitting the API


const server = setupServer(
    rest.get ('https://rickandmortyapi.com/api/character/:id', (req, res, ctx) => {
        return res(
            ctx.json({
                image: 'https://place-puppy.com/',
                name: 'Rick',
                species: 'Human',
                status: 'Alive',
            })
        );
    })
);

describe('Character Detail Page', () => {
    beforeAll(() => {
        server.listen();
    });
    afterAll(() => {
        server.close();
    });

    it('should render a character', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <Route path="/characters/:id">
               <CharacterDetail />
               </Route>
            </MemoryRouter>
        );
        screen.getByText('Loading character...')
        await screen.findByText('Rick');
    } )
})