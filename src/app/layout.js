import './globals.css'
import style from './layout.module.css';
import Link from 'next/link';
import localFont from 'next/font/local';
import { headFont } from '@/components/font';


const bodyFont = localFont({
  src: './fonts/RedRose-VariableFont_wght.ttf',
  display: 'swap',
})

export const metadata = {
  title: 'Icon Cee Official Website',
  description: 'Official website of the upcoming nigerian artist, Icon Cee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <header className={style.header}>
          <div className={style.header_intro}>
            <div className={`${style.logo} ${headFont.className}`}>I.k</div>
          </div>
          <nav className={style.site_nav}>
            <Link href='/#music'>
              <span>Music</span>
            </Link>
            <Link href='/#about'>
              <span>About</span>
            </Link>
            <Link href='/#video'>
              <span>Video</span>
            </Link>
          </nav>
        </header>
        {children}
        <footer className={style.footer}>copyright at ike Music | built by es7 labs</footer>
      </body>
    </html>
  )
}
