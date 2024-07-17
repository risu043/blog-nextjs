import Link from 'next/link';
import { getCategories } from '../../../libs/client';
import { FaFolder } from 'react-icons/fa';

export default async function Nav() {
  const { contents } = await getCategories();

  if (!contents) {
    return <h1>No Contents</h1>;
  }
  return (
    <nav className="bg-white p-4 mb-8 rounded-xl h-fit">
      <h2 className="font-kiwi text-xl text-center mb-4">Category</h2>
      <ul className="">
        {contents.map((category) => (
          <li key={category.id}>
            <Link
              href={`/blogs/categories/${category.id}`}
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
