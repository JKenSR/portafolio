import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el loader mientras carga portfolio.json', () => {
  render(<App />);
  const loader = screen.getByText(/Cargando portafolio/i);
  expect(loader).toBeInTheDocument();
});
