import { getDetail, getBlogs } from '../../../libs/client';
import { formatRichText } from '../../../libs/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaFolder } from 'react-icons/fa';

export async function generateStaticParams() {
  const { contents } = await getBlogs();

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    };
  });
  return [...paths];
}

export default async function StaticDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await getDetail(blogId);
  console.log('ok');

  return (
    <>
      <p className="text-3xl mb-2">{blog.title}</p>
      <p className="text-neutral-300">{blog.createdAt.slice(0, 10)}</p>
      <Link
        href={`/blogs/categories/${blog.category.id}`}
        className="text-neutral-300"
      >
        <div className="block flex items-center gap-2 mb-4">
          <FaFolder />
          {blog.category.name}
        </div>
      </Link>
      <Image
        src={blog.eyecatch.url}
        alt="Example Image"
        width={500}
        height={300}
        className="w-full h-auto object-cover mb-4"
      />

      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: `${formatRichText(blog.content)}`,
        }}
      />
    </>
  );
}
