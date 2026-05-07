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
          className="text-sm font-bold text-white dark:text-[#1E1E1E] font-satoshi"
        >
          {number}
        </span>
      </div>
      <div>
        <h3
          className="text-[18px] font-medium text-[#1E1E1E] dark:text-[#E6E6E6] mb-2 leading-[140%] font-satoshi"
        >
          {title}
        </h3>
        <p
          className="text-[#ADADAD] dark:text-[#555] text-base leading-[160%] font-satoshi"
        >
          {children}
        </p>
      </div>
    </div>
  );
}
