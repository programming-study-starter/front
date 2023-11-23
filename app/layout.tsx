import type { Metadata } from 'next';
import './globals.css';

import { redis } from '@/components/redis/RedisStore';
import Theme from '@/components/layout/Theme';
import ReactQueryProvider from '@/components/modules/reactQuery/ReactQueryProvider';
import NavbarComponent from '@/components/layout/NavbarComponent';

export const metadata: Metadata = {
  title: `${process.env.NEXT_PUBLIC_APP_TITLE}`,
  description: `${process.env.NEXT_PUBLIC_APP_DESCRIPTION}`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  redis.subscribe("alert-notice", (err, count) => {
    if (err) {
      console.error("Failed to subscribe: %s", err.message);
    } else {
      console.log(`Subscribed successfully! This client is currently subscribed to ${count} channels.`);
    }
  });

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
