import { getBlogs } from './../../libs/client';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

export default async function StaticPage() {
  const data = await getBlogs();

  const contents = data.contents;
  const totalCount = data.totalCount;

  if (!contents) {
    return <h1>No Contents</h1>;
  }

  return (
    <>
      <ul className="grid md:grid-cols-2 gap-8">
        {contents.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </ul>
      <Pagination totalCount={totalCount} />
    </>
  );
}
