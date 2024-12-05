'use client';

import { isOpenStore } from '@/store/openStore';
import Wrapper from '../Wrapper';
import { useShallow } from 'zustand/shallow';

export default function AddNoteForm() {
  const { isOpen, setOpen } = isOpenStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      setOpen: state.setOpen,
    }))
  );

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
        className={`bg-neutral-50 p-4 md:p-6 rounded-md shadow-md transition-transform duration-200 ${
          isOpen ? 'scale-100' : 'scale-0'
        }`}
      >
        <form className="flex flex-col gap-y-6">
          <h2 className="text-[1rem] text-neutral-900 font-medium border-b border-dashed border-neutral-300 pb-6">
            Add Note
          </h2>
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-1">
              <label htmlFor="title" className="text-[0.9rem] text-neutral-800">
                Title:
              </label>
              <input
                type="text"
                id="title"
                className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.9rem] py-1 md:py-2"
                placeholder="Max 50 characters"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="content"
                className="text-[0.9rem] text-neutral-800"
              >
                Content:
              </label>
              <textarea
                id="content"
                className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.9rem] py-1 md:py-2"
                placeholder="Max 1000 characters"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label
                htmlFor="category"
                className="text-[0.9rem] text-neutral-800"
              >
                Category:
              </label>
              <select
                id="category"
                defaultValue="home"
                className="bg-neutral-200 rounded px-2 text-neutral-800 text-[0.9rem] placeholder-neutral-400 placeholder:text-[0.9rem] py-1 md:py-2"
              >
                <option value="home">Home</option>
                <option value="home">Job</option>
                <option value="home">Personal</option>
              </select>
            </div>
          </div>
          <button className="bg-neutral-800 hover:bg-neutral-700 text-[0.9rem] text-neutral-200 py-1 md:py-2 mt-1 md:mt-2 rounded">
            Add Note
          </button>
        </form>
      </Wrapper>
    </div>
  );
}
