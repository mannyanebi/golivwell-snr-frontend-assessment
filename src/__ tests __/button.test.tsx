import { render, screen } from '@testing-library/react';
import Button from '../components/atoms/button';

describe('Button component', () => {
  test('renders button with given text', () => {
    render(<Button variant="primary" size="md" textSize="base">Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders button with primary variant', () => {
    render(<Button variant="primary" size="md" textSize="base">Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass('text-white bg-primary');
  });

  test('renders button with secondary variant', () => {
    render(<Button variant="secondary" size="md" textSize="base">Test Button</Button>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toHaveClass('text-primary bg-white border border-primary');
  });

  // Add more tests for other variants, sizes, textSizes, and roundedSizes
});