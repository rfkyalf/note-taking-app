import CreatePublicNotesForm from '@/components/public-notes/CreatePublicNotesForm';
import SubmissionReminderSection from '@/components/public-notes/SubmissionReminderSection';

export default function CreatePublicNotesPage() {
  return (
    <main className="flex flex-col gap-y-6 pt-20 pb-10">
      <SubmissionReminderSection />
      <CreatePublicNotesForm />
    </main>
  );
}
