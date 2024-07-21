import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';
import { ThemeSwitch } from './components/ThemeSwitch';
import Nav from './components/Nav';
import Profile from './components/Profile';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <header className="pt-16 pb-8">
            <Link href="/">
              <h1 className="font-kiwi text-center text-6xl mb-8">risuLog</h1>
            </Link>
            <ThemeSwitch />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
