export default function TwoCol({
  left,
  right,
  className = '',
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid grid-cols-2 gap-8 ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
