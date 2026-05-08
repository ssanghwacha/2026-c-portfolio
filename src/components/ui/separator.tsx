type SeparatorProps = React.HTMLAttributes<HTMLDivElement>;

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Separator({ className, ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cx('h-px w-full bg-[#ADADAD]/20 dark:bg-[#555]/30', className)}
      {...props}
    />
  );
}
