import { render, screen } from '@testing-library/react';
import MetricsSection from '../components/organisms/metrics-section';


describe('MetricsSection component', () => {
  beforeEach(() => {
    render(<MetricsSection />);
  });

  test('renders Our Metrics Tell the Story heading', () => {
    const headingElement = screen.getByText(/Our Metrics Tell the Story/i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style. description', () => {
    const descriptionElement = screen.getByText(/Our metrics component gives you the inside scoop on your success and helps you stay on top of your game in style./i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders 10k+ Websites launched metric', () => {
    const metricElement = screen.getByText(/Websites launched/i);
    expect(metricElement).toBeInTheDocument();
  });

  test('renders 931k+ Projects created with Anima metric', () => {
    const metricElement = screen.getByText(/Projects created with Anima/i);
    expect(metricElement).toBeInTheDocument();
  });

  test('renders 240k+ New users joined Anima metric', () => {
    const metricElement = screen.getByText(/New users joined Anima/i);
    expect(metricElement).toBeInTheDocument();
  });

  test('renders 12k+ Teams used Anima metric', () => {
    const metricElement = screen.getByText(/Teams used Anima/i);
    expect(metricElement).toBeInTheDocument();
  });
});