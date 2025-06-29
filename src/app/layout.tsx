import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './(components)/ThemeProvider';
import NavBar from './(components)/NavBar';
import HeroPage from './(components)/HeroPage';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alan Wu Portfolio',
  description: 'DevOps & Web Developer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
