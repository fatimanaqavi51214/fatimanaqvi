const ogImage = 'https://res.cloudinary.com/b7xbeztp/image/upload/v1787485385/header1.png';
const siteUrl = 'https://fatimanaqvi.vercel.app';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'نصرت فاطمہ نقوی | Nusrat Fatima Naqvi',
    template: '%s | نصرت فاطمہ نقوی',
  },
  description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون، وکیل انسانیت محترمہ نصرت فاطمہ نقوی کی رسمی ویب سائٹ۔',
  keywords: [
    'نصرت فاطمہ نقوی', 'Nusrat Fatima Naqvi', 'وکیل انسانیت',
    'ماں جي', 'Maan Jee', 'کاروبار', 'فلاحی خدمات', 'حسینیات',
    'اہل بیت', 'Ahlul Bayt', 'ڈبئی', 'دمشق', 'لاہور', 'پاکستان'
  ],
  authors: [{ name: 'نصرت فاطمہ نقوی' }],
  creator: 'نصرت فاطمہ نقوی',
  publisher: 'نصرت فاطمہ نقوی',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ur_PK',
    alternateLocale: ['ar_SA', 'fa_IR', 'es_ES'],
    url: siteUrl,
    siteName: 'نصرت فاطمہ نقوی | Nusrat Fatima Naqvi',
    title: 'نصرت فاطمہ نقوی | وکیل انسانیت',
    description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون، محترمہ نصرت فاطمہ نقوی کی رسمی ویب سائٹ۔',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 675,
        alt: 'نصرت فاطمہ نقوی',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'نصرت فاطمہ نقوی | وکیل انسانیت',
    description: 'خدمتِ خلق میں جہد مسلسل اور دردِ دل رکھنے والی عظیم خاتون، محترمہ نصرت فاطمہ نقوی کی رسمی ویب سائٹ۔',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  category: 'website',
}

export const viewport = {
  themeColor: '#0d1117',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="ur">
      <body>{children}</body>
    </html>
  )
}