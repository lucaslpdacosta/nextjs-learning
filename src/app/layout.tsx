import "./globals.css";
import { Header } from '../components/header';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Dominando Next.js',
  description: 'Entendendo SEO no Next.js',
  openGraph: {
    title: 'Dominando Next.js do zero',
    description: 'Entendendo SEO no Next.js'
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Header/>

        {children}
      </body>
    </html>
  );
}