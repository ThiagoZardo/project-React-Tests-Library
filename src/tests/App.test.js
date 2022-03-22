import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('1. Teste o componente <App.js />', () => {
  it('Verifica se existe os links para navegação', () => {
    renderWithRouter(<App />);
    const pageHome = screen.getByRole('link', { name: /Home/i });
    const pageAbout = screen.getByRole('link', { name: /About/i });
    const pageFavorite = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(pageHome).toBeInTheDocument();
    expect(pageAbout).toBeInTheDocument();
    expect(pageFavorite).toBeInTheDocument();
  });

  it('Redirecionada para a página inicial,ao clicar no link Home.', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    const pageHome = screen.getByRole('link', { name: /home/i });
    userEvent.click(pageHome);
    const titleHome = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(titleHome).toBeInTheDocument();
    expect(pathname).toBe('/');
  });

  it('Redirecionada para a página de About pelo link About.', () => {
    const { history } = renderWithRouter(<App />);
    const pageAbout = screen.getByRole('link', { name: /About/i });
    console.log(history.location.pathname);
    userEvent.click(pageAbout);
    const titleAbout = screen.getByRole('heading',
      { name: /About Pokédex/i, level: 2 });
    const { pathname } = history.location;
    console.log(history.location.pathname);
    expect(titleAbout).toBeInTheDocument();
    expect(pathname).toBe('/about');
  });

  it('Redirecionada para a página de favorites pelo link favorites.', () => {
    const { history } = renderWithRouter(<App />);
    const pageFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    userEvent.click(pageFavorites);
    const titleFavorite = screen.getByRole('heading',
      { name: /Favorite pokémons/i, level: 2 });
    const { pathname } = history.location;
    expect(titleFavorite).toBeInTheDocument();
    expect(pathname).toBe('/favorites');
  });

  it('Redirecionada para a página de Not Found quando url é desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pageNotFound');
    const titleNotFound = screen.getByRole('heading',
      { name: /Page requested not found/i, level: 2 });
    expect(titleNotFound).toBeInTheDocument();
  });
});
