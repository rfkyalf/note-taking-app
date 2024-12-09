import { MailWarning } from 'lucide-react';

export default function SubmissionReminderSection() {
  return (
    <section className="bg-yellow-300 flex flex-col gap-y-2 border-2 border-yellow-400 rounded-md p-2">
      <div className="flex items-center gap-x-2">
        <MailWarning className="size-5 text-yellow-900" />
        <h3 className="text-[1rem] text-yellow-900 font-medium">
          Submission Reminder
        </h3>
      </div>
      <p className="text-[0.9rem] text-yellow-800 text-pretty">
        Once your public note is submitted, it cannot be{' '}
        <span className="font-bold">deleted</span>. Please ensure that your note
        does not contain any <span className="font-bold">personal</span> or{' '}
        <span className="font-bold">sensitive information</span>. By submitting,
        you acknowledge that your note will be visible to everyone. Share
        responsibly.
      </p>
    </section>
  );
}
