export default function ABTestCard({
  objective,
  beforeLabel = 'A',
  afterLabel = 'B',
  beforeContent,
  afterContent,
  finding,
}: {
  objective: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  finding: string;
}) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] rounded-[8px] p-6">
      <p
        className="text-[#ADADAD] dark:text-[#555] text-sm mb-6"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {objective}
      </p>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <span
            className="text-xs text-[#ADADAD] dark:text-[#555] uppercase tracking-wide mb-3 block"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {beforeLabel}
          </span>
          {beforeContent}
        </div>
        <div>
          <span
            className="text-xs text-[#ADADAD] dark:text-[#555] uppercase tracking-wide mb-3 block"
            style={{ fontFamily: "'Satoshi', sans-serif" }}
          >
            {afterLabel}
          </span>
          {afterContent}
        </div>
      </div>
      <p
        className="text-[#1E1E1E] dark:text-[#E6E6E6] text-sm leading-[150%]"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {finding}
      </p>
    </div>
  );
}
