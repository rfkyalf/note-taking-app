'use client';

import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();
  const routerBack = () => router.back();

  return (
    <button
      onClick={routerBack}
      className="group flex items-center gap-x-2 text-neutral-800 hover:text-neutral-500 transition-colors duration-300"
    >
      <MoveLeft className="size-4 md:size-5" />
      <span className="text-[0.8rem] md:text-[0.9rem] transition-transform duration-300 group-hover:translate-x-2">
        Back
      </span>
    </button>
  );
}
