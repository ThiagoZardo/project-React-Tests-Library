import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import renderWithRouter from './renderWithRouter';
import { About } from '../components';

describe('2. Teste o componente <About.js />.', () => {
  it('Teste se a página contém as informações sobre a Pokédex.', () => {
    render(<About />);
    const infoP1 = screen.getByText('This application simulates a Pokédex, '
    + 'a digital encyclopedia containing all Pokémons');
    const infoP2 = screen.getByText('One can filter Pokémons by type, and see more '
    + 'details for each one of them');
    expect(infoP1).toBeInTheDocument();
    expect(infoP2).toBeInTheDocument();
  });

  it('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    render(<About />);
    const titleAbout = screen.getByRole('heading', { name: /about pokédex/i });
    expect(titleAbout).toBeInTheDocument();
  });

  it('Verifica se a página contém a seguinte a imagem de uma Pokédex', () => {
  // Consultei stackoverflow para pegar a img pela url.
  // https://stackoverflow.com/questions/60509527/jestreact-native-testing-library-how-to-test-an-image-src#:~:text=Voc%C3%AA%20tamb%C3%A9m%20pode,%C3%A0s%2019%3A43

    render(<About />);
    const imgPokedex = screen.getByRole('img', { name: /pokédex/i });
    expect(imgPokedex).toBeInTheDocument();
    expect(imgPokedex).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
