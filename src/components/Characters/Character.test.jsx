import { render } from '@testing-library/react'
import Character from './Character'

it.skip('should render characters', () => {
    const { container } = render(<Character character={{
        image: 'http://example.com/image.png',
        name:'Sarani',
        species:'Humanoid',
        status:'probably alive'}} />);
    expect(container).toMatchSnapshot();
});