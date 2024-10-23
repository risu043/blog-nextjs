'use client';

import { Category } from '@/libs/client';
import { FaFolder } from 'react-icons/fa';
import Link from 'next/link';

interface HeaderNavProps {
  categories: Category[];
  onItemClick: () => void;
}

export function HeaderNav({ categories, onItemClick }: HeaderNavProps) {
  if (!categories || categories.length === 0) {
    return <div>No categories available</div>;
  }

  return (
    <nav>
      <ul className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <li key={category.id}>
            <Link
              href={`/blogs/categories/${category.id}`}
              onClick={onItemClick}
              className="block flex items-center gap-2"
            >
              <FaFolder />
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
