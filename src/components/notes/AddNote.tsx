import { Plus } from 'lucide-react';

export default function AddNote() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button title="Add Note" className="bg-neutral-900 p-2 rounded-full">
        <Plus className="size-4 md:size-5 text-neutral-100" />
      </button>
    </div>
  );
}
