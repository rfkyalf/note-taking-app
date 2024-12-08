'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import Wrapper from '../Wrapper';
import { LogIn, NotebookPen } from 'lucide-react';

export default function HomeNavbar() {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <div className="bg-neutral-50 shadow py-2">
      <Wrapper className="flex items-center justify-between">
        <div className="flex items-center gap-x-8">
          <Link href="/" className="flex items-center gap-x-2">
            <NotebookPen className="size-5 text-neutral-950" />
            <h1 className="text-[1rem] text-neutral-950 font-bold">
              NotesApp.
            </h1>
          </Link>
          <Link
            href="/notes"
            className="group text-[0.8rem] font-medium text-neutral-800"
          >
            <span className="text-transparent group-hover:text-neutral-800">
              -
            </span>{' '}
            Private Notes
          </Link>
          <Link
            href="/public-notes"
            className="group text-[0.8rem] font-medium text-neutral-800"
          >
            <span className="text-transparent group-hover:text-neutral-800">
              -
            </span>{' '}
            Public Notes
          </Link>
        </div>
        {isSignedIn && isLoaded ? (
          <UserButton aria-label="User Profile" />
        ) : !isLoaded ? (
          <div
            className="h-5 w-16 bg-neutral-300 rounded-md animate-pulse"
            aria-label="Loading"
          ></div>
        ) : (
          <Link
            href="/sign-in"
            className="bg-neutral-50 hover:bg-neutral-200 border border-neutral-300 flex items-center gap-x-2 px-2 py-1 md:py-1.5 rounded-md"
            aria-label="Sign In"
          >
            <LogIn className="size-4 text-neutral-800" />
            <span className="text-[0.8rem] md:text-[0.9rem] text-neutral-800">
              Login
            </span>
          </Link>
        )}
      </Wrapper>
    </div>
  );
}
