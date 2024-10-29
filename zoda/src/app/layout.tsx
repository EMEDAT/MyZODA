import { Inter } from 'next/font/google';
import '../../styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Xplora.io',
  description: 'Analytics Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} centered-body`}>
        <div className="centered-container">
          {children}
        </div>
      </body>
    </html>
  );
}