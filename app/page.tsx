import { getBlogs } from './../libs/client';
import Card from './components/Card';
import Pagination from './components/Pagination';
import { Metadata } from 'next';

export default async function Home() {
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

export const metadata: Metadata = {
  title: 'risuLog',
  description: 'プログラミング学習ログ',
  openGraph: {
    title: 'risuLog',
    description: 'プログラミング学習ログ',
    url: 'https://risu-3-kurumi.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://risu-3-kurumi.vercel.app/ogp.png',
        width: 900,
        height: 400,
        alt: 'OG image',
      },
    ],
  },
};
