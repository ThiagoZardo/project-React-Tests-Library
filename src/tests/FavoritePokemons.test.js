import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import { FavoritePokemons } from '../components';

describe('3. Teste o componente <FavoritePokemons.js />', () => {
  it('Verifica se é exibida mensagem No favorite '
  + 'pokemon found, se a pessoa não tiver pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const img = screen.queryByRole('img');
    if (!img) {
      expect(screen.getByText(/no favorite pokemon found/i));
    }
  });

  it('Verifica se os marcados como favoritos são exibidos na página', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checked = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checked);
    const linkFavorite = screen.getByRole('link', { name: /favorite pokémons/i });
    userEvent.click(linkFavorite);
    expect(screen.getByText(/pikachu/i));
  });
});
