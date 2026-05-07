export default function PersonaCard({
  icon,
  quote,
  name,
}: {
  icon: string;
  quote: string;
  name?: string;
}) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] rounded-[8px] p-6 flex flex-col gap-3">
      <span className="text-2xl">{icon}</span>
      <p
        className="text-[#1E1E1E] dark:text-[#E6E6E6] text-base leading-[150%]"
        style={{ fontFamily: "'Satoshi', sans-serif" }}
      >
        "{quote}"
      </p>
      {name && (
        <p
          className="text-[#ADADAD] dark:text-[#555] text-sm"
          style={{ fontFamily: "'Satoshi', sans-serif" }}
        >
          {name}
        </p>
      )}
    </div>
  );
}
