export const metadata = {
  title: 'Nusrat Fatima Naqvi',
  description: 'Official Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ur">
      <body>{children}</body>
    </html>
  )
}