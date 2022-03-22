import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import { NotFound } from '../components';

describe('4. Teste o componente <NotFound.js />', () => {
  it('Verifica se página contém um heading h2 com o texto '
  + 'Page requested not found 😭', () => {
    renderWithRouter(<NotFound />);
    const titleNotFound = screen.getByRole('heading',
      { name: /Page requested not found Crying emoji/i },
      { level: 2 });
    expect(titleNotFound).toBeInTheDocument();
  });

  it('Verifica se exibe a imagem correta', () => {
    renderWithRouter(<NotFound />);
    const imgNotFound = screen.getByRole('img',
      { name: /pikachu crying because the page requested was not found/i });
    expect(imgNotFound).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
