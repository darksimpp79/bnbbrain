import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ErrorBoundaryClient } from "./components/ErrorBoundary"

export const metadata: Metadata = {
  title: "BNB BRAIN",
  description: "AI-powered crypto trading platform",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundaryClient>{children}</ErrorBoundaryClient>
      </body>
    </html>
  )
}



import './globals.css'