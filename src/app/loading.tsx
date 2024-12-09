import { Loader } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-neutral-50 w-full flex items-center justify-center z-[100]">
      <Loader className="animate-spin size-10 text-neutral-600" />
    </div>
  );
}
