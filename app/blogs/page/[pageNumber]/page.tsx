import Link from 'next/link';
import Pagination from '../../../components/Pagination';
import Card from '../../../components/Card';
import { getBlogs } from '../../../../libs/client';

const PER_PAGE = 10;

export default async function BlogPageId({
  params: { pageNumber },
}: {
  params: { pageNumber: string };
}) {
  const id = parseInt(pageNumber, 10);

  const data = await getBlogs({
    offset: (id - 1) * PER_PAGE,
    limit: PER_PAGE,
  });

  const contents = data.contents;
  const totalCount = data.totalCount;

  return (
    <div>
      <ul className="grid md:grid-cols-2 gap-8">
        {contents.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </ul>
      <Pagination totalCount={totalCount} current={id} />
    </div>
  );
}

// 動的なページを作成
export const generateStaticParams = async () => {
  const repos = await getBlogs();

  const range = (start: number, end: number) =>
    [...Array(end - start + 1)].map((_, i) => start + i);

  const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map(
    (repo) => ({
      id: repo.toString(),
    })
  );

  return paths;
};
