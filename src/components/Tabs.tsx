'use client';

import { cn } from '@/lib/utils';

export default function Tabs({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function TabsHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ul
      className={cn(
        'flex flex-wrap items-center gap-x-2 md:gap-x-4 lg:gap-x-6 border-b border-neutral-300',
        className
      )}
    >
      {children}
    </ul>
  );
}

export function TabsTitle({
  title,
  className,
  value,
  isActive,
  onClick,
}: {
  title: string;
  className?: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
}) {
  return (
    <li
      className={cn(
        `text-[0.9rem] md:text-[1rem] cursor-pointer border-b-2 border-transparent ${
          isActive ? 'text-neutral-700 border-neutral-700' : 'text-neutral-400'
        }`,
        className
      )}
    >
      <button onClick={() => onClick(value)}>{title}</button>
    </li>
  );
}

export function TabsContent({
  value,
  activeTab,
  children,
  className,
}: {
  value: string;
  activeTab: string;
  children: React.ReactNode;
  className?: string;
}) {
  return activeTab === value ? (
    <div className={cn(className)}>{children}</div>
  ) : null;
}
