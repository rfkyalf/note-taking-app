import { cn } from '@/lib/utils';

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Wrapper({ children, className }: WrapperProps) {
  return (
    <div
      className={cn(
        'w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
}
