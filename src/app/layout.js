import Header from "@/components/Header";
import "./globals.css";
import SessionProviders from "@/components/SessionProviders";
import { SessionProvider } from "next-auth/react";
import Footer from "@/components/Footer";
export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen flex flex-col">
        <SessionProviders>
          <Header />
          {children}
          <Footer />
        </SessionProviders>
      </body>
    </html>
  );
}
