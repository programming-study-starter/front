import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Theme from '@/components/layout/Theme';
import ReactQueryProvider from '@/components/modules/reactQuery/ReactQueryProvider';
import NavbarComponent from '@/components/layout/NavbarComponent';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_TITLE}`,
  description: `${process.env.NEXT_PUBLIC_APP_DESCRIPTION}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`w-full h-screen mx-auto`}>
        <ReactQueryProvider>
          <Theme>
            <header className="w-[calc(100%)] z-[10] fixed t-0">
              <NavbarComponent />
            </header>
            <div className='container relative top-20'>
              {children}
            </div>
          </Theme>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
