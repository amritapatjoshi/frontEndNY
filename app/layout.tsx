import { Metadata } from 'next';
import CssBaseline from '@mui/material/CssBaseline';

export const metadata: Metadata = {
    title: 'Home',
    description: 'NextJS Application',
  }

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <CssBaseline />
        <body>{children}</body>
      </html>
    )
  }