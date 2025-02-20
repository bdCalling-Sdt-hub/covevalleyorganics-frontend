import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/providers/Providers';

export const metadata: Metadata = {
      title: 'Cove valley Organics',
      description:
            ' organic baby food is specially crafted to provide the highest nutritional value for your little ones.',
};

export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en" className="scroll-smooth">
                  <body>
                        <Providers>{children}</Providers>
                  </body>
            </html>
      );
}
