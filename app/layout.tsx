import { Outfit, Manrope } from 'next/font/google';
import './globals.css';
import Navbar from './layout/navbar';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  title: 'Shahriar Rahman - Software Engineer & AI Researcher',
  description:
    'Portfolio of Shahriar Rahman - Software Engineer specializing in AI/ML, Full-Stack Development, and Cloud Technologies',
  keywords:
    'Shahriar Rahman, Software Engineer, AI Researcher, Full-Stack Developer, Machine Learning, Web Development',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${manrope.variable} scroll-smooth`}>
      <body className="font-outfit antialiased">
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
