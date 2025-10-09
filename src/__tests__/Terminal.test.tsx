/// <reference types="vitest/globals" />

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Terminal } from '@/components/Terminal';

describe('Terminal Component', () => {
  beforeEach(() => {
    render(<Terminal />);
  });

  test('renders terminal interface', () => {
    expect(screen.getByText('>')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('displays help command output', async () => {
    const input = screen.getByRole('textbox');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'help' } });
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText('> help')).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes('Comandos disponíveis:'))
      ).toBeInTheDocument();
    });
  });

  test('displays about command output', async () => {
    const input = screen.getByRole('textbox');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'about' } });
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText('> about')).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes('Olá! Sou 0xguidev'))
      ).toBeInTheDocument();
    });
  });

  test('displays projects command output', async () => {
    const input = screen.getByRole('textbox');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'projects' } });
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText('> projects')).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes('Projetos:'))
      ).toBeInTheDocument();
    });
  });

  test('displays contact command output', async () => {
    const input = screen.getByRole('textbox');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'contact' } });
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText('> contact')).toBeInTheDocument();
      expect(
        screen.getByText((content) => content.includes('Contato:'))
      ).toBeInTheDocument();
    });
  });

  test('handles unknown command', async () => {
    const input = screen.getByRole('textbox');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'unknown' } });
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(screen.getByText('> unknown')).toBeInTheDocument();
      expect(
        screen.getByText('Comando não reconhecido: unknown')
      ).toBeInTheDocument();
    });
  });

  test('clears input after command submission', async () => {
    const input = screen.getByRole('textbox');
    const form = input.closest('form');

    fireEvent.change(input, { target: { value: 'help' } });
    fireEvent.submit(form!);

    await waitFor(() => {
      expect(input).toHaveValue('');
    });
  });
});
