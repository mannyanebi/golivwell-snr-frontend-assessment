import { render, screen } from "@testing-library/react";
import MetricsCard from "../components/molecules/metrics-card";

describe("MetricsCard component", () => {
  test("renders metrics card with given props", () => {
    render(
      <MetricsCard value="Test Value" description="Some description" />
    );

    const titleElement = screen.getByText(/Test Value/i);
    expect(titleElement).toBeInTheDocument();

    const valueElement = screen.getByText(/Some description/i);
    expect(valueElement).toBeInTheDocument();
  });
});
