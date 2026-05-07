export default function BigStat({
  before,
  after,
  delta,
  caption,
}: {
  before: string;
  after: string;
  delta?: string;
  caption?: string;
}) {
  return (
    <div className="bg-[#F5F5F5] dark:bg-[#2A2A2A] rounded-[8px] p-10 my-10">
      <div className="flex items-baseline gap-5 flex-wrap">
        <p className="font-satoshi text-[48px] font-bold leading-[100%] tracking-[-0.04em] opacity-50 text-[#ADADAD] dark:text-[#555] line-through decoration-2">
          {before}
        </p>
        <span className="font-satoshi text-[48px] font-bold leading-[100%] tracking-[-0.04em] opacity-50 text-[#ADADAD] dark:text-[#555]">→</span>
        <p className="font-satoshi text-[48px] font-bold leading-[100%] tracking-[-0.04em] text-[#1E1E1E] dark:text-[#E6E6E6]">
          {after}
        </p>
        {delta && (
          <span className="font-satoshi type-ui font-bold bg-primary text-white dark:bg-[#E6E6E6] dark:text-[#1E1E1E] rounded-full px-3 py-1">
            {delta}
          </span>
        )}
      </div>
      {caption && (
        <p className="font-satoshi type-ui text-[#ADADAD] dark:text-[#555] mt-6">
          {caption}
        </p>
      )}
    </div>
  );
}
