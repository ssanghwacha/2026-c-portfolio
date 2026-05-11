export default function PersonaCard({
  icon,
  quote,
  name,
}: {
  icon: React.ReactNode;
  quote: string;
  name?: string;
}) {
  return (
    <div className="bg-white dark:bg-[#2A2A2A] rounded-[8px] p-6 flex flex-col gap-3">
      <div className="text-[#1E1E1E] dark:text-[#E6E6E6]">{icon}</div>
      <p
        className="text-[#1E1E1E] dark:text-[#E6E6E6] text-base leading-[150%] font-satoshi"
      >
        "{quote}"
      </p>
      {name && (
        <p
          className="text-[#ADADAD] dark:text-[#555] text-sm font-satoshi"
        >
          {name}
        </p>
      )}
    </div>
  );
}
