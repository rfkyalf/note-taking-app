'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Wrapper from '../Wrapper';

export default function NotesNavbar() {
  const { isLoaded } = useUser();

  return (
    <div className="bg-neutral-50 shadow py-4">
      <Wrapper className="flex items-center justify-between">
        <h1 className="text-[1rem] text-neutral-950 font-bold">Notes App</h1>
        {isLoaded ? (
          <UserButton showName />
        ) : (
          <div className="h-5 w-16 bg-neutral-300 rounded-md animate-pulse"></div>
        )}
      </Wrapper>
    </div>
  );
}
