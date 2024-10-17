import Link from 'next/link';

type PaginationProps = {
  totalCount: number;
  current?: number;
  basePath?: string;
  q?: string;
};

const Pagination = ({ totalCount, current = 1 }: PaginationProps) => {
  const PER_PAGE = 10;

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  return (
    <ul className="flex gap-4 w-fit mx-auto">
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => (
        <li key={number}>
          {current !== number ? (
            <Link
              href={`/blogs/page/${number}`}
              className="block bg-white rounded-full w-10 h-10 grid place-content-center hover:text-white hover:shadow-md hover:bg-rose-200"
            >
              {number}
            </Link>
          ) : (
            <span className="block bg-white rounded-full w-10 h-10 grid place-content-center currunt">
              {number}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
