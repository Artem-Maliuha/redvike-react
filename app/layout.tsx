import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { TanstackProvider } from '@/provider/tanstack-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'Pokemon list',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          <main className="flex min-h-screen flex-col gap-[24px] p-[24px]">
            {children}
          </main>
        </TanstackProvider>
      </body>
    </html>
  )
}
