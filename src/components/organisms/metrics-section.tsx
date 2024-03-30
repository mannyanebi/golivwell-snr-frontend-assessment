import MetricCard, { MetricCardProps } from "../molecules/metrics-card";
import SectionContainer from "../molecules/section-container";

const metrics: MetricCardProps[] = [
  {
    value: "10k+",
    description: "Websites launched",
  },
  {
    value: "931k+",
    description: "Projects created with Anima",
  },
  {
    value: "240k+",
    description: "New users joined Anima",
  },
  {
    value: "12k+",
    description: "Teams used Anima",
  },
];

function MetricsSection() {
  return (
    <SectionContainer>
      <SectionContainer.Header>
        Our Metrics Tell the Story
      </SectionContainer.Header>
      <SectionContainer.HeaderDesc>
        Our metrics component gives you the inside scoop on your success and
        helps you stay on top of your game in style.
      </SectionContainer.HeaderDesc>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 items-center justify-center p-3 md:p-6">
        {metrics.map((metric) => (
          <MetricCard key={metric.value.toLowerCase()} {...metric} />
        ))}
      </div>
    </SectionContainer>
  );
}

export default MetricsSection;
