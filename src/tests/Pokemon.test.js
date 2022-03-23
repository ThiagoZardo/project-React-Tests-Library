import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('6. Teste o componente <Pokemon.js />', () => {
  it('Verifica se é renderizado um card com as informações de '
  + 'determinado pokémon.', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /all/i });
    userEvent.click(btnAll);
    expect(screen.getByTestId(/pokemon-name/i));
    expect(screen.getByTestId(/pokemon-weight/i));
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent('Electric');
  });

  it('Verifica se o peso médio aparece na tela', () => {
    renderWithRouter(<App />);
    expect(screen.getAllByTestId(/pokemon-weight/i));
    const textWeightPokemon = screen.getByText(/average weight: 6\.0 kg/i);
    expect(textWeightPokemon).toBeInTheDocument();
  });

  it('Verifica se a imagem do pokemon esta correta', () => {
    renderWithRouter(<App />);
    const imagePokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imagePokemon).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Verifica se o card do Pokémon indicado na Pokédex '
  + 'contém um link de navegação para exibir detalhes', () => {
    const { history } = renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Verifique se existe um ícone de estrela nos Pokémons favoritados.', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkbox = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkbox);
    const pageFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(pageFavorite);
    const iconFavorite = screen.getByRole('img',
      { name: /pikachu is marked as favorite/i });
    expect(iconFavorite).toHaveAttribute('src', '/star-icon.svg');
  });
});
