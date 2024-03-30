import { render, screen } from '@testing-library/react';
import Header from '../components/organisms/header';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  test('renders Logo', () => {
    const logoElement = screen.getByAltText(/Logo/i);
    expect(logoElement).toBeInTheDocument();
  });

  test('renders Landing Page text', () => {
    const textElement = screen.getByText(/Landing/i);
    expect(textElement).toBeInTheDocument();
  });

  test('renders Contact button', () => {
    const buttonElement = screen.getByText(/Contact/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders How it works button', () => {
    const buttonElement = screen.getByText(/How it works/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders Get Started button', () => {
    const buttonElement = screen.getByText(/Get Started/i);
    expect(buttonElement).toBeInTheDocument();
  });
});