export default function MetricRow({
  label,
  before,
  after,
}: {
  label: string;
  before: string;
  after: string;
}) {
  return (
    <div
      className="flex items-center gap-6 py-5 border-b border-[#ADADAD]/30 dark:border-[#555]/30 last:border-0"
    >
      <span className="font-satoshi type-ui text-[#ADADAD] dark:text-[#555] w-40 flex-shrink-0">
        {label}
      </span>
      <span className="font-satoshi type-body-lg text-[#ADADAD] dark:text-[#555] line-through">
        {before}
      </span>
      <span className="font-satoshi type-body-lg text-[#ADADAD] dark:text-[#555]">→</span>
      <span className="font-satoshi type-body-lg text-[#1E1E1E] dark:text-[#E6E6E6]">
        {after}
      </span>
    </div>
  );
}
