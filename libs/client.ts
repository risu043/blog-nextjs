import { createClient } from 'microcms-js-sdk';
import type { MicroCMSQueries } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

export type Blog = {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  eyecatch: { url: string };
  category: { id: string; name: string };
  totalCount: number;
};

export type Category = {
  id: string;
  name: string;
};

if (!process.env.SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.API_KEY) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

// ブログ一覧を取得
export const getBlogs = async (queries?: MicroCMSQueries) => {
  const blogs = await client
    .getList<Blog>({
      endpoint: 'blogs',
      queries,
    })
    .catch(notFound);
  return blogs;
};

// ブログの詳細を取得
export const getDetail = async (contentId: string) => {
  const blog = await client.getListDetail<Blog>({
    endpoint: 'blogs',
    contentId,
  });
  return blog;
};

// カテゴリー一覧を取得
export const getCategories = async () => {
  const blogs = await client.getList<Category>({
    endpoint: 'categories',
  });
  return blogs;
};
