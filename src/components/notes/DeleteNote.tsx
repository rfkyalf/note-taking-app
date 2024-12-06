'use client';

import { deletePrivateNote } from '@/actions/notes';
import { LoaderCircle, Trash2 } from 'lucide-react';
import { useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';

export default function DeleteNote({ id }: { id: string }) {
  const deleteNoteById = deletePrivateNote.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger>
        <Trash2 className="size-4 md:size-5 text-neutral-400 hover:text-neutral-700" />
      </DialogTrigger>
      <DialogContent className="w-[95%] md:w-[400px] bg-neutral-50 flex flex-col p-4 rounded-md ">
        <DialogHeader className="text-start">
          <DialogTitle className="text-[1.2rem] font-semibold text-neutral-900">
            Delete this note?
          </DialogTitle>
          <DialogDescription className="text-[0.8rem] text-neutral-600">
            Are you absolutely sure you want to delete this note? Once deleted,
            it cannot be recovered, and all its content will be permanently
            removed from your account. Please confirm if you wish to proceed.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex">
          <form
            action={async () => {
              await deleteNoteById();
              toast.success('Note deleted successfully', {
                position: 'top-right',
                duration: 3000,
              });
            }}
          >
            <SubmitButton />
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className={`w-fit bg-red-500 hover:bg-red-400 text-[0.9rem] text-neutral-100 self-end px-4 py-1 md:py-2 rounded
        ${pending ? 'opacity-50 cursor-progress' : ''}`}
    >
      {pending ? (
        <LoaderCircle className="size-4 md:size-5 animate-spin" />
      ) : (
        <span>Delete</span>
      )}
    </button>
  );
}
