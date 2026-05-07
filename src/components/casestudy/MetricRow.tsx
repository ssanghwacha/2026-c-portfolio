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
      <span
        className="text-[#ADADAD] dark:text-[#555] text-sm w-40 flex-shrink-0"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {label}
      </span>
      <span
        className="text-[#ADADAD] dark:text-[#555] line-through"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {before}
      </span>
      <span className="text-[#ADADAD] dark:text-[#555]">→</span>
      <span
        className="text-[#1E1E1E] dark:text-[#E6E6E6] font-semibold"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {after}
      </span>
    </div>
  );
}
