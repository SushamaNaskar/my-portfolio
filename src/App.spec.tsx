import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock Home component to isolate App root rendering
vi.mock('./components/Home', () => ({
  default: () => <div data-testid="mock-home">Mock Home Component</div>,
}));

describe('App Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  it('renders the Home component as its root child', () => {
    render(<App />);

    const homeElement = screen.getByTestId('mock-home');
    expect(homeElement).toBeInTheDocument();
    expect(homeElement).toHaveTextContent('Mock Home Component');
  });
});