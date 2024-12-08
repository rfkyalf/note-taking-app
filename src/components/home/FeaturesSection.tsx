import { FEATURES } from '@/lib/constanst';
import SectionHeader from './SectionHeader';

const FEATURES_DESC =
  'Manage your notes effortlessly with NotesApp. Store personal notes securely, share ideas publicly, and stay organized with a simple, intuitive workspace—accessible anytime, anywhere.';

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="md:h-screen flex flex-col justify-center items-center gap-y-6"
    >
      <SectionHeader
        section_name="Features"
        title="Stay Focused, Stay Organized"
        desc={FEATURES_DESC}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10">
        {FEATURES.map((feature, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center gap-y-1 border border-neutral-300 rounded-md p-2 md:p-4"
          >
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_40%_at_50%_40%,#000_80%,transparent_100%)]" />
            <div className="bg-neutral-300 p-1.5 rounded-md">
              <feature.icon className="size-4 text-neutral-800" />
            </div>
            <h3 className="text-[0.9rem] md:text-[1rem] text-neutral-900 font-medium">
              {feature.title}
            </h3>
            <p className="max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px] text-[0.8rem] md:text-[0.9rem] text-neutral-700 text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
