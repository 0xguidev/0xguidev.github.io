import React from 'react';
import { fireEvent, getByRole } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Home from '../pages/Home'

describe('Testando a aplicação', () => {
  it('testa se clicar nos botoes é direcionado corretamente', () => {
    const { getByText, history } = renderWithRouter(<Home />);

    fireEvent.click(getByText(/Sobre/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Sobre/i);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve renderizar o componente Contato', () => {
    const { getByText, history } = renderWithRouter(<Home />);
    fireEvent.click(getByText(/Contato/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/contact');
    const aboutAll = getByText(/Contato/i);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve renderizar o componente Project', () => {
    const { getByText, history } = renderWithRouter(<Home />);
    fireEvent.click(getByText(/Projetos/i));
    const { pathname } = history.location;
    expect(pathname).toBe('/projects');
    const aboutAll = getByText(/projetos/i);
    expect(aboutAll).toBeInTheDocument();
  });


});
