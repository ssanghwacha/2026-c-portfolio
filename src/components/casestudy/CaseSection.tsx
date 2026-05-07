export default function CaseSection({
  id,
  children,
  className = '',
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-[80px] ${className}`}>
      {children}
    </section>
  );
}
