import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Icons({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  return (
    <Image
      src={`/icons/${icon}.svg`}
      alt={icon}
      width={24}
      height={24}
      className={cn('size-5 object-cover', className)}
    />
  );
}
