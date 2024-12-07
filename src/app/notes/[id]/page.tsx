import { getPrivateNote } from '@/actions/notes';
import Wrapper from '@/components/Wrapper';
import { categoryColor } from '@/lib/utils';
import { notFound } from 'next/navigation';

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getPrivateNote(params.id);

  if (!note) return notFound();

  return (
    <Wrapper className="min-h-screen flex flex-col py-4 md:py-5 lg:py-6">
      <div className="bg-neutral-50 shadow-md rounded-md p-2 md:p-4 flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6">
        <div>
          <h2 className="text-[1rem] md:text-[1.1rem] text-neutral-900 font-medium border-b border-dashed border-neutral-300 pb-1 md:pb-2">
            {note?.title}
          </h2>
          <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700 pt-1 md:pt-2">
            {note?.content}
          </p>
        </div>
        <p
          className={`w-fit text-[0.7rem] md:text-[0.8rem] text-neutral-900 px-2 rounded ${categoryColor(
            note.category
          )}`}
        >
          {note.category}
        </p>
      </div>
    </Wrapper>
  );
}
