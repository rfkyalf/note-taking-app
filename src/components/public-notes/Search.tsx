'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/public-notes?query=${query}`);
    } else {
      router.push('/public-notes');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full flex items-center justify-center gap-x-1">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Search by title..."
        className="w-full md:w-[50%] bg-neutral-50 placeholder-neutral-400 placeholder:text-[0.8rem] md:placeholder:text-[0.9rem] text-[0.8rem] md:text-[0.9rem] text-neutral-700 border border-neutral-300 px-4 py-1 rounded-md"
      />
      <button
        onClick={handleSearch}
        className="bg-neutral-900 hover:bg-neutral-700 text-[0.8rem] md:text-[0.9rem] text-neutral-200 flex items-center justify-center px-4 py-1 rounded"
      >
        Search
      </button>
    </div>
  );
}
