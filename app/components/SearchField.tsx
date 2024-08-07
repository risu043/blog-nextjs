'use client';

import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Route } from 'next/types';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Suspense } from 'react';

function Search() {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('q', query);
    } else {
      params.delete('q');
    }
    if (e.key === 'Enter') {
      replace(`/blogs/search?${params.toString()}` as Route);
      setQuery('');
    }
  };

  return (
    <>
      <div className="card-body p-4 mb-8 rounded-xl h-fit">
        <h2 className="font-kiwi text-xl text-center mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full border rounded-lg pl-8 pr-2 py-2 bg-no-repeat bg-[url('/search.svg')] bg-[left_8px_center] bg-[length:16px_100%]"
        />
      </div>
    </>
  );
}

export default function SearchField() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
