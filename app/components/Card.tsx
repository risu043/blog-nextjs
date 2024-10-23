import Link from 'next/link';
import Image from 'next/image';
import { Blog } from './../../libs/client';
import { FaFolder } from 'react-icons/fa';

type CardProps = {
  blog: Blog;
};

const Card: React.FC<CardProps> = ({ blog }) => {
  return (
    <li className="card-body mb-4 rounded-xl" key={blog.id}>
      <Link href={`/blogs/${blog.id}`}>
        <div className="overflow-hidden rounded-t-xl">
          <Image
            src={blog.eyecatch.url}
            alt="Example Image"
            width={500}
            height={300}
            priority={true}
            className="w-full h-60 object-cover rounded-t-xl transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>

      <div className="p-4">
        <Link href={`/blogs/${blog.id}`} className="block text-xl">
          {blog.title}
        </Link>
        <p className="text-neutral-300">{blog.createdAt.slice(0, 10)}</p>
        <Link
          href={`/blogs/categories/${blog.category.id}`}
          className="text-neutral-300"
        >
          <div className="block flex items-center gap-2">
            <FaFolder />
            {blog.category.name}
          </div>
        </Link>
      </div>
    </li>
  );
};

export default Card;
