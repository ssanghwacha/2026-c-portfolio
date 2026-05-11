export default function NumberedBlock({
  number,
  title,
  children,
  icon,
  boxIcon,
  boxTitle,
  boxContent,
}: {
  number?: number;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  boxIcon?: React.ReactNode;
  boxTitle?: string;
  boxContent?: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0 flex items-center justify-center">
          {icon ? (
            <div className="flex items-center justify-center text-[#373737] dark:text-[#E6E6E6]">
              {icon}
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-[#1E1E1E] dark:bg-[#E6E6E6] flex items-center justify-center">
              <span className="text-sm font-bold text-white dark:text-[#1E1E1E] font-satoshi">
                {number}
              </span>
            </div>
          )}
        </div>
        <h3
          className="font-satoshi text-[20px] font-[500] text-[#373737] dark:text-[#E6E6E6] leading-[140%] uppercase"
        >
          {title}
        </h3>
      </div>
      {children && (
        <p
          className="text-[#ADADAD] dark:text-[#555] text-base leading-[160%] font-satoshi"
        >
          {children}
        </p>
      )}
      {boxIcon && boxTitle && boxContent && (
        <div className="rounded-[14px] bg-[#F5F5F5] dark:bg-[#2A2A2A] p-6 flex flex-col gap-4 mt-2">
          <div className="flex gap-2 items-start">
            <div className="flex-shrink-0 flex items-center justify-center text-[#ADADAD] dark:text-[#777] mt-1">
              {boxIcon}
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-satoshi text-[16px] font-[500] text-[#373737] dark:text-[#E6E6E6]">
                {boxTitle}
              </h4>
              <p className="text-[#6F6F6F] dark:text-[#AAA] font-satoshi text-[14px] font-medium leading-[160%]">
                {boxContent}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
