export default function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-[#1E1E1E] dark:border-[#E6E6E6] pl-6 py-2 my-10">
      <p
        className="text-2xl font-medium leading-[130%] text-[#1E1E1E] dark:text-[#E6E6E6]"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        {children}
      </p>
    </blockquote>
  );
}
