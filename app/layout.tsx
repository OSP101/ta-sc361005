import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import Link from 'next/link'
import ThemeSwitcher from './components/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Score - SC361005',
  description: 'SC361005/2566 Introduction to Computer Organization and Architecture'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <header className='py-6'>
            <nav className='container flex items-center justify-between'>
              <ul>
                <li>
                  <Link href='/'>SC361005/2566 Introduction to Computer Organization and Architecture</Link>
                </li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </header>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
