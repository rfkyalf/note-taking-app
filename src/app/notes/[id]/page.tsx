import { getPrivateNote } from '@/actions/notes';
import BackButton from '@/components/BackButton';
import Wrapper from '@/components/Wrapper';
import { NoteCategory } from '@prisma/client';
import moment from 'moment';
import { notFound } from 'next/navigation';

export default async function NotePage({ params }: { params: { id: string } }) {
  const note = await getPrivateNote(params.id);

  if (!note) return notFound();

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
    <Wrapper className="min-h-screen flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6 py-4 md:py-5 lg:py-6">
      <BackButton />
      <div className="bg-neutral-50 shadow-md rounded-md p-2 md:p-4 flex flex-col gap-y-4 md:gap-y-5 lg:gap-y-6">
        <div>
          <h2 className="text-[1rem] md:text-[1.1rem] text-neutral-900 font-medium border-b border-dashed border-neutral-300 pb-1 md:pb-2">
            {note?.title}
          </h2>
          <p className="text-[0.8rem] md:text-[0.9rem] text-neutral-700 pt-1 md:pt-2">
            {note?.content}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`w-fit text-[0.7rem] md:text-[0.8rem] text-neutral-900 px-2 rounded ${categoryColor(
              note.category
            )}`}
          >
            {note.category}
          </p>
          <p className="text-[0.7rem] md:text-[0.8rem] text-neutral-600">
            {moment(note.updatedAt).format('dddd, MMMM Do YYYY, h:mm:ss A')}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
