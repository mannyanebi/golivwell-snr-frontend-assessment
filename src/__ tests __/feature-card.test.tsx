import { render, screen } from "@testing-library/react";
import FeatureCard from "../components/molecules/features-card";

describe("FeatureCard component", () => {
  test("renders feature card with given props", () => {
    render(
      <FeatureCard
        title="Test Title"
        iconImg="test-icon.png"
        iconBgColor="bg-red-300"
        description="Test Description"
      />
    );

    const iconElement = screen.getByAltText(/icon/i);
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveAttribute("src", "test-file-stub");

    const titleElement = screen.getByText(/Test Title/i);
    expect(titleElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(/Test Description/i);
    expect(descriptionElement).toBeInTheDocument();

    const buttonElement = screen.getByText(/Learn More/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
