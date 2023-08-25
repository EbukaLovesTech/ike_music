import './globals.css'
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Icon Cee Official Website',
  description: 'Official website of the upcoming nigerian artist, Icon Cee',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
