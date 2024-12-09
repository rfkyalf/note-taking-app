'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { UserButton, useUser } from '@clerk/nextjs';
import { LogIn, Menu, NotebookPen } from 'lucide-react';
import Link from 'next/link';
import Icons from '../Icons';
import Wrapper from '../Wrapper';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function PublicNotesNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-40 w-full mx-auto bg-neutral-50 py-2 md:py-4 transition-shadow duration-300 ${
        isScrolled ? 'shadow' : 'shadow-transparent'
      }`}
    >
      <Wrapper className="flex items-center justify-between">
        <DesktopNavbar pathname={pathname} />
        <MobileNavbar />
        <LoginButton />
      </Wrapper>
    </div>
  );
}

const MobileNavbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <Menu className="size-5 text-neutral-800" />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="w-[80%] flex flex-col gap-y-0 p-2 rounded-r-md"
      >
        <SheetHeader className="border-b border-dashed border-neutral-300 pb-2">
          <SheetTitle className="flex items-center gap-x-1">
            <NotebookPen className="size-4 text-neutral-950" />
            <span className="text-[0.9rem] text-neutral-950 font-bold">
              NotesApp.
            </span>
          </SheetTitle>
          <SheetDescription className="text-[0.8rem] text-neutral-700 text-start">
            The simplest way to keep your notes.
          </SheetDescription>
        </SheetHeader>
        <div className="h-full flex flex-col pt-2 gap-y-1">
          <span className="text-[0.7rem] text-neutral-600 font-medium">
            Menu
          </span>
          <Link
            href="/public-notes/create"
            className="text-[0.9rem] text-neutral-900 pl-1"
          >
            Create Notes
          </Link>
          <Link
            href="/public-notes"
            className="text-[0.9rem] text-neutral-900 pl-1"
          >
            Search
          </Link>
        </div>
        <SheetFooter className="flex flex-col gap-y-1">
          <span className="text-[0.9rem] text-neutral-900">Find us on:</span>
          <div className="flex items-center gap-x-2">
            <Link href="/">
              <Icons icon="github" />
            </Link>
            <Link href="/">
              <Icons icon="linkedin" />
            </Link>
            <Link href="/">
              <Icons icon="instagram" />
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const DesktopNavbar = ({ pathname }: { pathname: string }) => {
  return (
    <>
      <div className="hidden md:flex items-center gap-x-8">
        <Link href="/" className="flex items-center gap-x-2">
          <NotebookPen className="size-5 text-neutral-950" />
          <h1 className="text-[1rem] text-neutral-950 font-bold">NotesApp.</h1>
        </Link>
        <Link
          href="/public-notes/create"
          className="group text-[0.8rem] font-medium text-neutral-800 mt-1"
        >
          <span
            className={` group-hover:text-neutral-800 ${
              pathname === '/public-notes/create'
                ? 'text-neutral-800'
                : 'text-transparent'
            }`}
          >
            -
          </span>{' '}
          Create Notes
        </Link>
        <Link
          href="/public-notes"
          className="group text-[0.8rem] font-medium text-neutral-800 mt-1"
        >
          <span
            className={`group-hover:text-neutral-800 ${
              pathname === '/public-notes'
                ? 'text-neutral-800'
                : 'text-transparent'
            }`}
          >
            -
          </span>{' '}
          Search
        </Link>
      </div>
    </>
  );
};

const LoginButton = () => {
  const { isLoaded, isSignedIn } = useUser();

  return (
    <>
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
          <LogIn className="size-3 md:size-4 text-neutral-800" />
          <span className="text-[0.7rem] md:text-[0.8rem] text-neutral-800">
            Login
          </span>
        </Link>
      )}
    </>
  );
};
