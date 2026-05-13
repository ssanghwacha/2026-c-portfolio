export default function ABTestCard({
  objective,
  beforeLabel = 'A',
  afterLabel = 'B',
  beforeContent,
  afterContent,
  finding,
}: {
  objective?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  finding: string;
}) {
  return (
    <div className="rounded-[8px]">
      {objective && (
        <p
          className="text-[#ADADAD] dark:text-[#555] text-sm mb-6 font-satoshi"
        >
          {objective}
        </p>
      )}
      <div className="grid gap-4 mb-6 lg:grid-cols-2">
        <div>
          <span
            className="text-xs text-[#ADADAD] dark:text-[#555] uppercase tracking-wide mb-3 block font-satoshi"
          >
            {beforeLabel}
          </span>
          {beforeContent}
        </div>
        <div>
          <span
            className="text-xs text-[#ADADAD] dark:text-[#555] uppercase tracking-wide mb-3 block font-satoshi"
          >
            {afterLabel}
          </span>
          {afterContent}
        </div>
      </div>
      <p
        className="text-[#1E1E1E] dark:text-[#E6E6E6] text-sm leading-[150%] font-satoshi"
      >
        {finding}
      </p>
    </div>
  );
}
