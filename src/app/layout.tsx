import type { Metadata } from 'next'
import "./globals.scss"
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: "Minjeong Kim",
  description: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className='section_container'>
          <section>
            {children}
          </section>
        </div>
        <Footer />
      </body>
    </html >
  );
}
