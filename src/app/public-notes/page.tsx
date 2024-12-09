import { getPublicNotes } from '@/actions/publicNotes';
import Search from '@/components/public-notes/Search';
import { formatRelativeDate } from '@/lib/utils';

export default async function PublicNotesPage({
  searchParams,
}: {
  searchParams: {
    query?: string;
  };
}) {
  const query = searchParams.query;
  const publicNotes = await getPublicNotes(query);

  return (
    <main className="flex flex-col gap-y-6 pt-20">
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
      <>
        {publicNotes?.length === 0 ? (
          <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-400">
            No notes found
          </p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
            {publicNotes.map((note) => {
              return (
                <div
                  key={note.id}
                  className="bg-neutral-50 flex flex-col justify-between gap-y-4 border border-neutral-300 rounded-md p-2 md:p-4"
                >
                  <div>
                    <h3 className="text-[1rem] text-neutral-900 font-medium text-pretty">
                      {note.title}
                    </h3>
                    <p className="max-h-[250px] overflow-auto text-[0.8rem] text-neutral-700 whitespace-pre-wrap text-pretty">
                      {note.content}
                    </p>
                  </div>
                  <p className="text-[0.7rem] text-neutral-600 self-end">
                    {formatRelativeDate(note.createdAt.toISOString())}
                  </p>
                </div>
              );
            })}
          </section>
        )}
      </>
    </main>
  );
}
