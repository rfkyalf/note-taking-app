import SubmissionReminderSection from '@/components/public-notes/SubmissionReminderSection';

export default function CreatePublicNotesPage() {
  return (
    <main className="flex flex-col gap-y-6 pt-20 pb-10">
      <SubmissionReminderSection />
      <section className="flex flex-col gap-y-4">
        <div>
          <h2 className="text-[1.2rem] text-neutral-900 font-semibold">
            Create Public Notes
          </h2>
          <p className="text-[0.9rem] text-neutral-700">
            Share your thoughts with the world!
          </p>
        </div>
        <form action="" className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Title"
            className="bg-neutral-50 text-[0.9rem] text-neutral-800 placeholder-neutral-400 placeholder:text-[0.9rem] border border-neutral-300 px-2 py-1 rounded-md"
          />
          <textarea
            rows={5}
            placeholder="Content"
            className="bg-neutral-50 text-[0.9rem] text-neutral-800 placeholder-neutral-400 placeholder:text-[0.9rem] border border-neutral-300 px-2 py-1 rounded-md"
          />
          <button className="bg-neutral-900 text-neutral-100 py-1 rounded-md">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
