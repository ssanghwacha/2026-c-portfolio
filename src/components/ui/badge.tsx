type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      data-reveal="badge"
      className={cx(
        'inline-flex items-center rounded-full bg-[#E9E9E9] px-3 py-1 font-satoshi text-xs font-medium uppercase tracking-[0.16em] text-[#555] dark:bg-[#333] dark:text-[#ADADAD]',
        className
      )}
      {...props}
    />
  );
}
