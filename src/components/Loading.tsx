import { cn } from '@/lib/utils';
import { LoaderCircle } from 'lucide-react';

export default function Loading({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full h-full flex items-center justify-center',
        className
      )}
    >
      <LoaderCircle className="size-4 md:size-5 text-neutral-600 animate-spin" />
    </div>
  );
}
