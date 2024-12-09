import CreatePublicNotesForm from '@/components/public-notes/CreatePublicNotesForm';
import SubmissionReminderSection from '@/components/public-notes/SubmissionReminderSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Public Notes',
  description:
    'Share your thoughts with the world. Create a public note and let others discover what inspires you.',
};

export default function CreatePublicNotesPage() {
  return (
    <main className="flex flex-col gap-y-6 pt-20 pb-10">
      <SubmissionReminderSection />
      <CreatePublicNotesForm />
    </main>
  );
}
