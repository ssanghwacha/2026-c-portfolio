export default function QuoteBlock({
  children,
  label = 'Takeaway',
}: {
  children: React.ReactNode;
  label?: string;
}) {
  return (
    <div className="inline-block bg-[#F4F4F4] dark:bg-[#1A1A1A] rounded-[12px] px-8 py-8 my-10">
      <p className="font-satoshi type-eyebrow text-[#888] dark:text-[#777] mb-3">
        {label}
      </p>
      <p className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]">
        {children}
      </p>
    </div>
  );
}
