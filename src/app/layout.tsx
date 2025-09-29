import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "INDIGO PRODUXION - Estudio de Producción Musical",
  description: "Estudio profesional de producción musical, grabación, mezcla y masterización",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
