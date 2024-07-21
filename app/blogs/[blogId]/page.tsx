import { getDetail, getBlogs } from '../../../libs/client';
import { formatRichText } from '../../../libs/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FaFolder } from 'react-icons/fa';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const { contents } = await getBlogs();

  const paths = contents.map((blog) => {
    return {
      blogId: blog.id,
    };
  });
  return [...paths];
}

export async function generateMetadata({
  params: { blogId },
}: {
  params: { blogId: string };
}): Promise<Metadata> {
  const blog = await getDetail(blogId);
  return {
    title: blog.title,
    description: 'risuLog:プログラミング学習ログ',
    openGraph: {
      title: blog.title,
      description: 'risuLog:プログラミング学習ログ',
      url: `https://risu-3-kurumi.vercel.app/blogs/${blogId}`,
      type: 'website',
      images: [
        {
          url: blog.eyecatch.url,
          width: 1200,
          height: 630,
          alt: 'OG image',
        },
      ],
    },
  };
}

export default async function StaticDetailPage({
  params: { blogId },
}: {
  params: { blogId: string };
}) {
  const blog = await getDetail(blogId);

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
