import { getNotes } from '@/actions/getNotes';
import { formatRelativeDate } from '@/lib/utils';
import { NoteCategory } from '@prisma/client';
import { PencilLine, Trash2 } from 'lucide-react';

export default async function NoteList({
  category,
}: {
  category?: NoteCategory;
}) {
  const notes = await getNotes(category);

  const categoryColor = (category: NoteCategory) => {
    switch (category) {
      case 'HOME':
        return 'bg-violet-300';
      case 'JOB':
        return 'bg-rose-300';
      case 'PERSONAL':
        return 'bg-blue-300';
    }
  };

  return (
    <>
      {notes?.length === 0 ? (
        <p className="text-[0.9rem] md:text-[1rem] text-neutral-600">
          No notes found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
          {notes?.map((note) => (
            <div
              key={note.id}
              className="w-full bg-neutral-50 flex flex-col justify-between shadow-md rounded-md p-2 md:p-4"
            >
              <div className="flex flex-col">
                <p className="text-[0.6rem] md:text-[0.7rem] text-neutral-400 self-end mb-1">
                  {/* {note.createdAt.toDateString()} */}
                  {formatRelativeDate(note.createdAt.toISOString())}
                </p>
                <h3 className="text-[1rem] md:text-[1.1rem] text-neutral-900 font-medium">
                  {note.title}
                </h3>
                <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700 text-pretty whitespace-pre-wrap max-h-[150px] overflow-auto">
                  {note.content}
                </p>
              </div>
              <div className="flex items-center justify-between mt-2 md:mt-4">
                <p
                  className={`w-fit text-[0.7rem] md:text-[0.8rem] text-neutral-900 px-2 rounded ${categoryColor(
                    note.category
                  )}`}
                >
                  {note.category}
                </p>
                <div className="flex items-center gap-x-1 md:gap-x-2">
                  <button>
                    <PencilLine className="size-4 md:size-5 text-neutral-400 hover:text-neutral-700" />
                  </button>
                  <button>
                    <Trash2 className="size-4 md:size-5 text-neutral-400 hover:text-neutral-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
