import { render, screen } from '@testing-library/react';
import App from './App';

test('should find the following text', () => {
  render(<App />);
  const linkElement = screen.getByText(/pdc/i);
  expect(linkElement).toBeInTheDocument();
});
