import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './layout/navbar';
import BackgroundEffects from './layout/BackgroundEffects';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
});

export const metadata = {
  title: 'Shahriar Rahman — AI Researcher & Software Engineer',
  description:
    'Portfolio of Shahriar Rahman — Computer Science graduate specialising in machine learning, computer vision, and full-stack development.',
  keywords: 'Shahriar Rahman, AI Researcher, Software Engineer, Machine Learning, Computer Vision',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#0b0f14] text-zinc-200">
        <BackgroundEffects />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
