import './globals.css'
import { Roboto } from 'next/font/google'

export const metadata = {
  title: 'TimeMe',
  description: 'We are gonna be called TimeMe until we find new name',
}

const roboto = Roboto({ subsets: ['latin'], weight: ['300'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
