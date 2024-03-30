import { render, screen } from '@testing-library/react';
import SatisfiedCustomersSection from '../components/organisms/satisfied-customers-section';


describe('SatisfiedCustomersSection component', () => {
  beforeEach(() => {
    render(<SatisfiedCustomersSection />);
  });

  test('renders Real Stories from Satisfied Customers heading', () => {
    const headingElement = screen.getByText(/Real Stories from Satisfied Customers/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders See how our landing page ui kit is making an impact. description', () => {
    const descriptionElement = screen.getByText(/See how our landing page ui kit is making an impact./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders Sarah K. review', () => {
    const reviewElement = screen.getByText(/I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver!/i);
    expect(reviewElement).toBeInTheDocument();
  });

  test('renders Michael L. review', () => {
    const reviewElement = screen.getByText(/The Landing Page UI Kit has been a game changer for my agency./i);
    expect(reviewElement).toBeInTheDocument();
  });

  test('renders Lauren M. review', () => {
    const reviewElement = screen.getByText(/Anima’s Landing Page UI Kit has become a staple in my design toolkit./i);
    expect(reviewElement).toBeInTheDocument();
  });
});