'use client';

import { createPublicNotes } from '@/actions/publicNotes';
import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';

export default function CreatePublicNotesForm() {
  const [state, formAction] = useFormState(createPublicNotes, {
    error: {},
  });

  useEffect(() => {
    if (state.isSuccess) {
      toast.success('Note created successfully', {
        position: 'top-right',
        duration: 3000,
      });
      document.querySelector('form')?.reset();
    }
  }, [state]);

  return (
    <section className="flex flex-col gap-y-4">
      <div>
        <h2 className="text-[1.2rem] text-neutral-900 font-semibold">
          Create Public Notes
        </h2>
        <p className="text-[0.9rem] text-neutral-700">
          Share your thoughts with the world!
        </p>
      </div>
      <form action={formAction} className="flex flex-col gap-y-4">
        <div className="flex flex-col">
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="bg-neutral-50 text-[0.9rem] text-neutral-800 placeholder-neutral-400 placeholder:text-[0.9rem] border border-neutral-300 px-2 py-1 md:py-2 rounded-md"
          />
          {state.error?.title ? (
            <p className="text-[0.8rem] text-red-500">{state.error?.title}</p>
          ) : (
            ''
          )}
        </div>
        <div className="flex flex-col">
          <textarea
            rows={5}
            name="content"
            placeholder="Content"
            className="bg-neutral-50 text-[0.9rem] text-neutral-800 placeholder-neutral-400 placeholder:text-[0.9rem] border border-neutral-300 px-2 py-1 md:py-2 rounded-md"
          />
          {state.error?.content ? (
            <p className="text-[0.8rem] text-red-500">{state.error?.content}</p>
          ) : (
            ''
          )}
        </div>
        <CreateNPublicoteButton />
      </form>
    </section>
  );
}

const CreateNPublicoteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className={`bg-neutral-800 hover:bg-neutral-700 text-[0.9rem] text-neutral-200 flex items-center justify-center py-2 rounded
          ${pending ? 'opacity-50 cursor-progress' : ''}
          `}
    >
      {pending ? (
        <LoaderCircle className="size-4 md:size-5 animate-spin" />
      ) : (
        <span>Submit</span>
      )}
    </button>
  );
};
