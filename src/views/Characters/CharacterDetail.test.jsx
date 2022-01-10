import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CharacterDetail from './CharacterDetail'

describe('Character Detail Page', () => {
    it('should render a character', async () => {
        render(
            <MemoryRouter initialEntries={['/characters/1']}>
                <CharacterDetail />
            </MemoryRouter>
        );

        screen.getByText('Loading character')
        screen.findByText('Rick Sanchez');
    } )
})