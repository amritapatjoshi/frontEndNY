import { Metadata } from "next"
import CssBaseline from "@mui/material/CssBaseline"
import textConfig from "@/shared/config/text-config"
import Screensaver from "@/shared/components/hs-screen-saver/hs-screen-saver"

export const metadata: Metadata = {
  title: textConfig.title
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
      <link rel="manifest" href="/manifest.json" />
      <CssBaseline />
      <body>
        <Screensaver />
        {children}</body>
    </html>
  )
}