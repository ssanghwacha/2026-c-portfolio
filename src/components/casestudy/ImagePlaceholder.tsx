export default function ImagePlaceholder({
  ratio = '16/9',
  label,
  className = '',
}: {
  ratio?: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#E5E5E5] dark:bg-[#333] rounded-[8px] flex items-center justify-center w-full ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {label && (
        <span className="font-satoshi text-sm text-[#ADADAD] dark:text-[#666]">{label}</span>
      )}
    </div>
  );
}
