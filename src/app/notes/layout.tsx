import AddNote from '@/components/notes/AddNote';
import AddNoteForm from '@/components/notes/AddNoteForm';
import NotesNavbar from '@/components/notes/NotesNavbar';

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-neutral-100 min-h-screen flex flex-col">
      <NotesNavbar />
      {children}
      <AddNote />
      <AddNoteForm />
    </div>
  );
}
