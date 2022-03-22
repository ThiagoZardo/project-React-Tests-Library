import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
// import { Pokedex } from '../components';

describe('5. Teste o componente <Pokedex.js />', () => {
  it('Verifica se a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const titlePokedex = screen.getByRole('heading',
      { name: /Encountered pokémons/i },
      { level: 2 });
    expect(titlePokedex).toBeInTheDocument();
  });

  it('Verifica se é exibido o próximo Pokémon da lista '
  + 'quando o botão Próximo pokémon é clicado.', () => {
    renderWithRouter(<App />);
    const btnNext = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(btnNext).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/charmander/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Caterpie/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Ekans/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Alakazam/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Mew/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Rapidash/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Snorlax/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Dragonair/i)).toBeInTheDocument();
    userEvent.click(btnNext);
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  });

  it('Verifica se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);
    const img = screen.queryByRole('img');
    expect(img).toBeInTheDocument();
  });

  it('Verifica se a Pokédex tem os botões de filtro.', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: 'All' });
    expect(btnAll).toBeInTheDocument();
    const btnElectric = screen.getByRole('button', { name: 'Electric' });
    expect(btnElectric).toBeInTheDocument();
    userEvent.click(btnElectric);
    expect(screen.getByText(/pikachu/i));
    const btnFire = screen.getByRole('button', { name: 'Fire' });
    expect(btnFire).toBeInTheDocument();
    const btnBug = screen.getByRole('button', { name: 'Bug' });
    expect(btnBug).toBeInTheDocument();
    const btnPoison = screen.getByRole('button', { name: 'Poison' });
    expect(btnPoison).toBeInTheDocument();
    const btnPsychic = screen.getByRole('button', { name: 'Psychic' });
    expect(btnPsychic).toBeInTheDocument();
    userEvent.click(btnPsychic);
    expect(screen.getByText(/Alakazam/i));
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    expect(screen.getByText(/Mew/i));
    userEvent.click(screen.getByRole('button', { name: /próximo pokémon/i }));
    expect(screen.getByText(/Alakazam/i));
    const btnNormal = screen.getByRole('button', { name: 'Normal' });
    expect(btnNormal).toBeInTheDocument();
    const btnDragon = screen.getByRole('button', { name: 'Dragon' });
    expect(btnDragon).toBeInTheDocument();
  });

  it('Verifica se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    expect(screen.getAllByTestId(/pokemon-type-button/i));
    const btnFilters = screen.getByRole('button', { name: 'All' });
    expect(btnFilters).toBeInTheDocument();

    userEvent.click(btnFilters);
    expect(screen.getByText(/Pikachu/i)).toBeInTheDocument();
  });
});
