'use client';

import { createPrivateNotes } from '@/actions/createNotes';
import { isOpenStore } from '@/store/openStore';
import { LoaderCircle } from 'lucide-react';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { useShallow } from 'zustand/shallow';
import { successToast } from '../Toast';
import Wrapper from '../Wrapper';

export default function AddNoteForm() {
  const { isOpen, setOpen } = isOpenStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      setOpen: state.setOpen,
    }))
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const [state, formAction] = useFormState(createPrivateNotes, {
    error: {},
  });

  useEffect(() => {
    if (state.isSuccess) {
      setOpen(false);
      state.isSuccess = false;
      successToast();
      document.querySelector('form')?.reset();
    }
  }, [state.isSuccess, setOpen, state]);

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      className={`fixed inset-0 bg-neutral-950/20 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-300 ${
        isOpen
          ? 'pointer-events-auto opacity-100'
          : 'pointer-events-none opacity-0'
      }`}
    >
      <Wrapper
        className={`max-h-screen bg-neutral-50 rounded-md shadow-md transition-transform duration-200 overflow-auto ${
          isOpen ? 'scale-100' : 'scale-0'
        }`}
      >
        <form action={formAction} className="flex flex-col gap-y-4 p-4">
          <h2 className="text-[1.2rem] md:text-[1.3rem] text-neutral-900 font-medium border-b border-dashed border-neutral-300 pb-2">
            Add Note
          </h2>
          <div className="flex flex-col">
            <input
              type="text"
              name="title"
              className={`bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] py-1 md:py-2 ${
                state.error?.title
                  ? 'border border-red-500 placeholder-red-500'
                  : ''
              }`}
              placeholder="Type your title here..."
            />
            {state.error?.title && (
              <p className="text-red-500 text-[0.8rem] md:text-[0.9rem] mt-1">
                {state.error?.title}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <textarea
              rows={5}
              name="content"
              className={`bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] py-1 md:py-2 ${
                state.error?.content
                  ? 'border border-red-500 placeholder-red-500'
                  : ''
              }`}
              placeholder="Type your note here..."
            />
            {state.error?.content && (
              <p className="text-red-500 text-[0.8rem] md:text-[0.9rem] mt-1">
                {state.error?.content}
              </p>
            )}
          </div>
          <select
            name="category"
            defaultValue="HOME"
            className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] py-1 md:py-2"
          >
            <option value="HOME">Home</option>
            <option value="JOB">Job</option>
            <option value="PERSONAL">Personal</option>
          </select>
          <CreateNoteButton />
        </form>
      </Wrapper>
    </div>
  );
}

const CreateNoteButton = () => {
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
        <span>Add Notes</span>
      )}
    </button>
  );
};
