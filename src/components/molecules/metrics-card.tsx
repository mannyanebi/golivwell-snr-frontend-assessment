export type MetricCardProps = {
  value: string;
  description: string;
};

function MetricCard({ value, description }: MetricCardProps) {
  return (
    <div className="w-[270px] h-[170px] bg-white shadow-sm rounded-t-[20px] border-b-4 border-b-[#F2BFAF] text-center p-7 flex flex-col space-y-7 items-center justify-center">
      <h3 className="text-4xl font-display font-semibold">{value}</h3>
      <p className="text-sm font-light w-10/12">{description}</p>
    </div>
  );
}

export default MetricCard;
