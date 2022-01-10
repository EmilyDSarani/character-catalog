import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CharacterDetail from './CharacterDetail'
//mock out the testing so that when internet fails, your tests do not. 
//this is because this test is directly hitting the API


describe('Character Detail Page', () => {
    it('should render a character', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <Route>
                <CharacterDetail />
                </Route>
            </MemoryRouter>
        );

        screen.getByText('Loading character')
        screen.findByText('Rick Sanchez');
    } )
})