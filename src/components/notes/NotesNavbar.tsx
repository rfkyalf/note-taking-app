'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Wrapper from '../Wrapper';
import Link from 'next/link';

export default function NotesNavbar() {
  const { isLoaded } = useUser();

  return (
    <div className="bg-neutral-50 shadow py-4">
      <Wrapper className="flex items-center justify-between">
        <h1 className="text-[1rem] text-neutral-950 font-bold">
          <Link href="/">Notes App</Link>
        </h1>
        {isLoaded ? (
          <UserButton />
        ) : (
          <div className="h-5 w-16 bg-neutral-300 rounded-md animate-pulse"></div>
        )}
      </Wrapper>
    </div>
  );
}
