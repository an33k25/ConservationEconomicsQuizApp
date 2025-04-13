import './globals.css'
import { Oxanium } from 'next/font/google'


const oxanium = Oxanium({
  subsets: ['latin'],
  weight: '400', // Audiowide only supports 400
  variable: '--font-oxanium',
  display: 'swap',
})

export const metadata = {
  title: 'NPTEL Conservation Economics',
  description: 'Pratice for FAT exam',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={oxanium.className}>
      <body>{children}</body>
    </html>
  )
}
