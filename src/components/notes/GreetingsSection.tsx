'use client';

import { greetings } from '@/lib/utils';
import { useUser } from '@clerk/nextjs';

export default function GreetingsSection() {
  const { user, isLoaded } = useUser();

  return (
    <section>
      <h1 className="text-[1.3rem] md:text-[1.4rem] text-neutral-950 font-semibold">
        My Notes
      </h1>
      <h2 className="text-[0.8rem] md:text-[0.9rem] text-neutral-800 text-pretty">
        {greetings()},
        <span className="font-medium">
          &nbsp;{isLoaded ? user?.firstName : 'User'}
        </span>
        . Here are your notes. Start creating and organizing your ideas!
      </h2>
    </section>
  );
}
