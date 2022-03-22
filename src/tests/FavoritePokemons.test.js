import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
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
});
