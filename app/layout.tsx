import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from './components/Nav';
import Profile from './components/Profile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'risuLog',
  description: 'プログラミング学習ログ',
  openGraph: {
    title: 'risuLog',
    description: 'プログラミング学習ログ',
    url: 'https://example.com',
    type: 'website',
    images: [
      {
        url: 'https://example.com/ogp.png',
        width: 900,
        height: 400,
        alt: 'OG image',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="pt-16 pb-8">
          <Link href="/">
            <h1 className="font-kiwi text-center text-6xl mb-16">risuLog</h1>
          </Link>
        </header>
        <div className="container mx-auto max-w-screen-lg grid md:grid-cols-[minmax(500px,_1fr)_200px] gap-8 p-4">
          <main>{children}</main>
          <div>
            <Profile />
            <Nav />
          </div>
        </div>

        <footer>
          <p className="text-center p-8">2024 &copy; りす</p>
        </footer>
      </body>
    </html>
  );
}
