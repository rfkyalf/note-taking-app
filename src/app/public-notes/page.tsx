import Search from '@/components/public-notes/Search';

export default function PublicNotesPage() {
  return (
    <main className="flex flex-col items-center gap-y-6 pt-20">
      <div className="flex flex-col items-center">
        <h2 className="text-[1.5rem] md:text-[1.6rem] text-neutral-900 font-semibold text-center">
          Public Notes
        </h2>
        <p className="md:w-[70%] text-[0.8rem] md:text-[0.9rem] text-neutral-700 text-center">
          Find what inspires you. Search through shared notes from people around
          the world or contribute your own ideas.
        </p>
      </div>
      <Search />
    </main>
  );
}
