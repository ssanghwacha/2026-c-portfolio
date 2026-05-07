export default function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-[#1E1E1E] dark:border-[#E6E6E6] pl-6 py-2 my-10">
      <p
        className="font-satoshi type-overview text-[#1E1E1E] dark:text-[#E6E6E6]"
      >
        {children}
      </p>
    </blockquote>
  );
}
