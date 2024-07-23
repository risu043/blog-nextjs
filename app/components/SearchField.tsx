'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Route } from 'next/types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Suspense } from 'react';

export default function SearchField() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchParams.get('q')?.toString() || '');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    replace(`/blogs/search?${params.toString()}` as Route);
    setQuery('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <>
      <Suspense fallback={<div>Loading search field...</div>}>
        <div className="card-body p-4 mb-8 rounded-xl h-fit">
          <h2 className="font-kiwi text-xl text-center mb-4">Search</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="flex w-full">
              <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleInputChange}
                className="w-[126px] flex-grow p-2 border rounded-l-lg "
              />
              <button
                type="submit"
                disabled={!query}
                className="w-[60px] md:w-[42px] p-2 bg-rose-300 text-white rounded-r-lg disabled:bg-neutral-300 grid place-content-center"
              >
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
      </Suspense>
    </>
  );
}
