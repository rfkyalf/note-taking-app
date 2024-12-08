import SectionHeader from '@/components/home/SectionHeader';
import { HOW_IT_WORKS } from '@/lib/constanst';
import Link from 'next/link';

export default function HowItWorksSection() {
  return (
    <section className="my-10 md:my-0 md:h-screen flex flex-col justify-center items-center gap-y-6 md:gap-y-10">
      <SectionHeader
        section_name="How it Works"
        title="Simple Steps to Save Your Notes"
        desc="Discover how easy it is to manage your notes with just a few simple steps. Create, organize, and access your notes anytime, anywhere—staying productive has never been this effortless."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {HOW_IT_WORKS.map((how) => (
          <div
            key={how.id}
            className="flex flex-col gap-y-4 border border-neutral-300 rounded-md p-2 md:p-4"
          >
            <p className="bg-neutral-200 w-fit text-[0.8rem] text-neutral-700 px-2 border border-neutral-300 rounded">
              {how.id}
            </p>
            <div>
              <h3 className="text-[0.9rem] md:text-[1rem] text-neutral-900 font-medium">
                {how.title}
              </h3>
              <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700">
                {how.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative w-full bg-neutral-950 flex flex-col items-center gap-y-4 md:gap-y-6 rounded-md p-2 md:p-4">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#40404040_1px,transparent_1px),linear-gradient(to_bottom,#40404040_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
        <div className="relative">
          <h3 className="text-[1rem] text-neutral-100 font-semibold text-center">
            Ready to Get Started?
          </h3>
          <p className="text-[0.8rem] text-neutral-400 text-center">
            Create your account and start saving your notes today!
          </p>
        </div>
        <Link
          href="/sign-up"
          className="relative w-fit bg-neutral-50 hover:bg-neutral-200 text-[0.8rem] text-neutral-900 px-4 py-1 rounded"
        >
          Sign Up
        </Link>
      </div>
    </section>
  );
}
