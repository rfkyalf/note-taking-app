'use client';

import { isOpenStore } from '@/store/openStore';
import { Plus } from 'lucide-react';
import { useShallow } from 'zustand/shallow';

export default function AddNote() {
  const { isOpen, setOpen } = isOpenStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      setOpen: state.setOpen,
    }))
  );

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setOpen(!isOpen)}
        title="Add Note"
        className="bg-neutral-900 p-2 rounded-full"
      >
        <Plus className="size-4 md:size-5 text-neutral-100" />
      </button>
    </div>
  );
}
