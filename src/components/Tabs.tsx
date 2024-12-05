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
        'flex flex-wrap items-center gap-x-2 gap-y-2 md:gap-x-4 lg:gap-x-6',
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
  icon,
}: {
  title: string;
  className?: string;
  value: string;
  isActive: boolean;
  onClick: (value: string) => void;
  icon: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        `cursor-pointer px-2 md:px-4 py-1 md:py-2 rounded-md hover:text-neutral-700  ${
          isActive
            ? 'text-neutral-700 bg-neutral-50 shadow'
            : 'text-neutral-400'
        }`,
        className
      )}
    >
      <button
        onClick={() => onClick(value)}
        className="flex items-center gap-x-2 md:gap-x-3"
      >
        <span>{icon}</span>
        <span className="text-[0.8rem] md:text-[0.9rem]">{title}</span>
      </button>
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
