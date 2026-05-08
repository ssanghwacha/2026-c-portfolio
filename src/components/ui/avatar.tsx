import Image from 'next/image';

type AvatarProps = React.HTMLAttributes<HTMLSpanElement>;
type AvatarImageProps = React.ComponentProps<typeof Image>;

function cx(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(' ');
}

export function Avatar({ className, ...props }: AvatarProps) {
  return (
    <span
      className={cx(
        'relative inline-flex h-7 w-7 shrink-0 overflow-hidden rounded-full bg-[#E9E9E9] align-middle dark:bg-[#333]',
        className
      )}
      {...props}
    />
  );
}

export function AvatarImage({ className, alt, ...props }: AvatarImageProps) {
  return <Image alt={alt} className={cx('h-full w-full object-cover', className)} {...props} />;
}

export function AvatarFallback({ className, ...props }: AvatarProps) {
  return (
    <span
      className={cx(
        'flex h-full w-full items-center justify-center font-satoshi text-[12px] font-bold leading-none text-white',
        className
      )}
      {...props}
    />
  );
}

export function AvatarGroup({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cx('flex items-center -space-x-2', className)} {...props} />;
}

export function AvatarGroupCount({ className, ...props }: AvatarProps) {
  return (
    <span
      className={cx(
        'inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#F5F5F5] bg-[#E9E9E9] font-satoshi text-[10px] font-bold text-[#6F6F6F] dark:border-[#2A2A2A] dark:bg-[#333] dark:text-[#E6E6E6]',
        className
      )}
      {...props}
    />
  );
}

export function AvatarBadge({ className, ...props }: AvatarProps) {
  return (
    <span
      className={cx(
        'absolute bottom-0 right-0 h-2 w-2 rounded-full border border-[#F5F5F5] bg-primary dark:border-[#2A2A2A]',
        className
      )}
      {...props}
    />
  );
}
