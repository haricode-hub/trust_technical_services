import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Trust Technical Services - Safety & Electronics Innovation',
  description: 'Professional Test & Tag services, electronics design, and fire safety testing across New Zealand. Your trusted partner for electrical safety compliance and technical innovation.',
  keywords: 'test and tag, electrical testing, PCB design, electronics design, fire safety, New Zealand, electrical compliance, safety testing',
  icons: {
    icon: '/image.png',
    shortcut: '/image.png',
    apple: '/image.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-background text-foreground`}>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17439926079"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17439926079');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}