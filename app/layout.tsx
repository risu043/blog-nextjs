import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import Nav from './components/Nav';
import Profile from './components/Profile';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import { getCategories } from './../libs/client';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { contents } = await getCategories();
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div id="page" className="container mx-auto max-w-6xl">
            <Header categories={contents} />
            <main id="main">{children}</main>
            <Toaster />
            <nav id="nav" className="md:sticky md:top-8">
              <Profile />
              <Nav />
            </nav>
            <footer>
              <p className="text-center p-8">2024 &copy; りす</p>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
