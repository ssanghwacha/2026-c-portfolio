type CardProps = React.HTMLAttributes<HTMLDivElement>;

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      data-reveal="card"
      className={cx('rounded-[12px] border-0 bg-[#F5F5F5]/70 text-[#1E1E1E] dark:bg-[#2A2A2A]/70 dark:text-[#E6E6E6]', className)}
      {...props}
    />
  );
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={cx('p-6', className)} {...props} />;
}
