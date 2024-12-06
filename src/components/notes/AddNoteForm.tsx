'use client';

import { isOpenStore } from '@/store/openStore';
import Wrapper from '../Wrapper';
import { useShallow } from 'zustand/shallow';
import { useEffect } from 'react';

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
        <form className="flex flex-col gap-y-4 p-4">
          <h2 className="text-[1.2rem] md:text-[1.3rem] text-neutral-900 font-medium border-b border-dashed border-neutral-300 pb-2">
            Add Note
          </h2>
          <input
            type="text"
            id="title"
            className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] py-1 md:py-2"
            placeholder="Type your title here..."
          />
          <textarea
            rows={5}
            className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] py-1 md:py-2"
            placeholder="Type your content here..."
          />
          <select
            id="category"
            defaultValue="home"
            className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.8rem] md:text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] py-1 md:py-2"
          >
            <option value="home">Home</option>
            <option value="home">Job</option>
            <option value="home">Personal</option>
          </select>
          <button className="bg-neutral-800 hover:bg-neutral-700 text-[0.8rem] md:text-[0.9rem] text-neutral-200 py-1 md:py-2 rounded">
            Add Note
          </button>
        </form>
      </Wrapper>
    </div>
  );
}
