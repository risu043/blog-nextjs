import { getBlogs, getCategories } from '../../../../libs/client';
import { Metadata } from 'next';
import Card from '../../../components/Card';
import { FaFolder } from 'react-icons/fa';

export async function generateStaticParams() {
  const { contents } = await getCategories();

  const paths = contents.map((category) => {
    return {
      categoryId: category.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params: { categoryId },
}: {
  params: { categoryId: string };
}) {
  console.log('ok');

  const data = await getBlogs({
    filters: `category[equals]${categoryId}`,
  });

  const categories = await getCategories();
  const category = categories.contents.find((cat) => cat.id === categoryId);
  const categoryName = category?.name;

  return (
    <>
      <p className="pb-4 flex items-center gap-2">
        <FaFolder />
        {categoryName}の記事
      </p>
      <ul className="grid md:grid-cols-2 gap-4">
        {data.contents.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </ul>
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
