import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('7. Teste o componente <PokemonDetails.js />', () => {
  it('Verifique se as informações detalhadas do Pokémon '
  + 'selecionado são mostradas na tela.', () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(screen.getByRole('button', { name: /all/i }));
    userEvent.click(btnDetails);
    expect(screen.getByRole('heading', { name: /pikachu details/i }));
    expect(screen.getByRole('heading', { name: /summary/i, level: 2 }));

    const infoP1 = screen.getByText('This intelligent Pokémon roasts hard berries '
    + 'with electricity to make them tender enough to eat.');
    expect(infoP1).toBeInTheDocument();
  });

  it('Verifique se existe na página uma seção com os mapas contendo as '
  + 'localizações do pokémon', () => {
    renderWithRouter(<App />);
    const btnDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(screen.getByRole('button', { name: /all/i }));
    userEvent.click(btnDetails);
    expect(screen.getByRole('heading', { name: /game locations of pikachu/i, level: 2 }));
    expect(screen.getByText(/kanto viridian forest/i));
    const mapPokemon = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(mapPokemon[0]).toBeInTheDocument();
    expect(mapPokemon[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(mapPokemon[1]).toBeInTheDocument();
    expect(mapPokemon[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  it('Verifique se o usuário pode favoritar um pokémon através '
  + 'da página de detalhes', () => {
    renderWithRouter(<App />);
    userEvent.click(screen.getByRole('link', { name: /more details/i }));
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    const imgFavorite = screen.getByRole('img',
      { name: /pikachu is marked as favorite/i });
    expect(imgFavorite).toBeInTheDocument();
    userEvent.click(checkbox);
    expect(!imgFavorite);
  });
});
