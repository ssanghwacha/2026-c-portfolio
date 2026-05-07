export default function NumberedBlock({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#1E1E1E] dark:bg-[#E6E6E6] flex items-center justify-center">
        <span
          className="text-sm font-bold text-white dark:text-[#1E1E1E]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {number}
        </span>
      </div>
      <div>
        <h3
          className="text-lg font-semibold text-[#1E1E1E] dark:text-[#E6E6E6] mb-2"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {title}
        </h3>
        <p
          className="text-[#ADADAD] dark:text-[#555] text-base leading-[160%]"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {children}
        </p>
      </div>
    </div>
  );
}
