export default function SectionHeader({
  section_name,
  title,
  desc,
}: {
  section_name: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-y-1">
      <p className="w-fit bg-neutral-300 border border-neutral-400 text-[0.7rem] text-neutral-600 px-2 rounded-md">
        {section_name}
      </p>
      <h2 className="text-[1.5rem] md:text-[1.6rem] text-neutral-900 font-semibold text-center">
        {title}
      </h2>
      <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700 text-center">
        {desc}
      </p>
    </div>
  );
}
