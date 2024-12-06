'use client';

import { updateNote } from '@/actions/notes';
import { Private_Note } from '@prisma/client';
import { LoaderCircle, PencilLine } from 'lucide-react';
import { useFormState, useFormStatus } from 'react-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function UpdateNote({
  privateNote,
}: {
  privateNote: Private_Note;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const updateNoteById = updateNote.bind(null, privateNote.id);

  const [state, formAction] = useFormState(updateNoteById, {
    error: {},
  });

  useEffect(() => {
    if (state.isSuccess) {
      if (state.isSuccess) {
        toast.success('Note updated successfully', {
          position: 'top-right',
          duration: 3000,
        });
        setIsOpen(false);
      }
    }
  }, [state]);

  console.log(isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>
        <PencilLine className="size-4 md:size-5 text-neutral-400 hover:text-neutral-700" />
      </DialogTrigger>
      <DialogContent className="w-[95%] md:w-[650px] lg:w-[850px] xl:w-[1050px] bg-neutral-50 flex flex-col p-4 rounded-md ">
        <DialogHeader className="text-start">
          <DialogTitle className="text-[1.2rem] font-semibold text-neutral-900">
            Edit Note
          </DialogTitle>
          <DialogDescription className="text-[0.8rem] text-neutral-600">
            Make changes to this note.
          </DialogDescription>
        </DialogHeader>
        <form action={formAction} className="flex flex-col gap-y-4">
          <div className="flex flex-col">
            <input
              type="text"
              name="title"
              defaultValue={privateNote.title}
              className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] py-1 md:py-2"
            />
            {state.error?.title && (
              <p className="text-red-500 text-[0.8rem] md:text-[0.9rem] mt-1">
                {state.error?.title}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <textarea
              name="content"
              rows={5}
              defaultValue={privateNote.content}
              className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] py-1 md:py-2"
            />
            {state.error?.content && (
              <p className="text-red-500 text-[0.8rem] md:text-[0.9rem] mt-1">
                {state.error?.content}
              </p>
            )}
          </div>
          <select
            name="category"
            defaultValue={privateNote.category}
            className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] py-1 md:py-2"
          >
            <option value="HOME">Home</option>
            <option value="JOB">Job</option>
            <option value="PERSONAL">Personal</option>
          </select>
          <UpdateNoteButton />
        </form>
      </DialogContent>
    </Dialog>
  );
}

const UpdateNoteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-neutral-800 hover:bg-neutral-700 text-[0.8rem] md:text-[0.9rem] text-neutral-200 flex items-center justify-center py-1 md:py-2 rounded
          ${pending ? 'opacity-50 cursor-progress' : ''}
          `}
    >
      {pending ? (
        <LoaderCircle className="size-4 md:size-5 animate-spin" />
      ) : (
        <span>Update Notes</span>
      )}
    </button>
  );
};
