import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Providers from '@/app/providers.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "car-insurance-demo",
  description: "car-insurance-demo",
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  );
}
