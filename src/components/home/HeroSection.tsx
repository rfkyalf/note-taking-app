'use client';

import Link from 'next/link';
import { motion } from 'motion/react';

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden flex flex-col justify-center items-center gap-y-6 md:gap-y-8">
      <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_30%,#000_80%,transparent_100%)]" />
      <div className="relative flex flex-col items-center gap-y-1 md:gap-y-2">
        <motion.h1
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] md:max-w-[500px] font-bold text-neutral-900 text-center text-pretty"
        >
          The Simplest Way to Keep Notes
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-[320px] md:max-w-full text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-700 text-center text-pretty"
        >
          Save your notes easily and stay organized without any hassle.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative flex items-center justify-center gap-x-4 md:gap-x-6"
      >
        <Link
          href="#features"
          className="bg-neutral-50 hover:bg-neutral-200 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-800 shadow-md rounded-md px-4 py-1"
        >
          Learn More
        </Link>
        <Link
          href="/notes"
          className="bg-neutral-900 hover:bg-neutral-700 text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-neutral-200 shadow-md rounded-md px-4 py-1"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  );
}
