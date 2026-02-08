import './globals.css'
import { Inter } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import CustomerService from '@/components/CustomerService'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: '天津中信通国际贸易 - 管道及配件',
    template: '%s | 中信通管道'
  },
  description: '专业的高品质管道及配件供应商，为国际市场提供优质产品和服务',
  keywords: ['管道', '配件', ' plumbing', '建筑', '工业', 'PE管道', 'PVC管道', '外贸出口'],
  authors: [{ name: '天津中信通国际贸易有限公司' }],
  creator: '天津中信通国际贸易有限公司',
  publisher: '天津中信通国际贸易有限公司',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://www.jtpipeline.com',
    title: '天津中信通国际贸易 - 管道及配件',
    description: '专业的高品质管道及配件供应商，为国际市场提供优质产品和服务',
    siteName: '中信通管道',
    images: [
      {
        url: '/og-image.jpg', // This should be a real image path
        width: 1200,
        height: 630,
        alt: '中信通管道 - 专业管道供应商',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '天津中信通国际贸易 - 管道及配件',
    description: '专业的高品质管道及配件供应商，为国际市场提供优质产品和服务',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // Replace with actual verification code
    yandex: 'yandex-verification-code',     // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          {children}
          <PerformanceMonitor />
          <CustomerService />
        </LanguageProvider>
      </body>
    </html>
  )
}