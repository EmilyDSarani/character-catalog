import { render } from '@testing-library/react'
import Character from './Character'

it('should render character', () => {
    const { container } = render(
    <Character character={{
        image: 'https://place-puppy.com/',
        name:'Sarani',
        species:'Humanoid',
        status:'possibly alive'}} />);
    expect(container).toMatchSnapshot();
});