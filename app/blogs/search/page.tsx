import { getBlogs } from '../../../libs/client';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function Page({ searchParams }: Props) {
  const data = await getBlogs({
    q: searchParams.q,
  });

  return (
    <>
      <p className="pb-4 flex items-center gap-2">
        「{searchParams.q}」を含む記事
      </p>
      {data.contents.length === 0 ? (
        '検索結果なし'
      ) : (
        <>
          <ul className="grid md:grid-cols-2 gap-4">
            {data.contents.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </ul>
          <Pagination
            totalCount={data.totalCount}
            basePath="/search"
            q={searchParams.q}
          />
        </>
      )}
    </>
  );
}
