import { getDetail, getBlogs, getCategories } from '../../../../libs/client';
import Image from 'next/image';
import Link from 'next/link';
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
