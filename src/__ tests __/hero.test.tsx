import { render, screen } from '@testing-library/react';
import Hero from '../components/organisms/hero';


describe('Hero component', () => {
  beforeEach(() => {
    render(<Hero />);
  });

  test('renders Create Engaging Landing Pages heading', () => {
    const headingElement = screen.getByText(/Create Engaging Landing Pages/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required! paragraph', () => {
    const paragraphElement = screen.getByText(/Build beautiful landing pages in record time with Anima’s Landing Page UI kit for Figma. No code required!/i);
    expect(paragraphElement).toBeInTheDocument();
  });

  test('renders Get Started button', () => {
    const buttonElement = screen.getByText(/Get Started/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders How it works button', () => {
    const buttonElement = screen.getByText(/How it works/i);
    expect(buttonElement).toBeInTheDocument();
  });
});