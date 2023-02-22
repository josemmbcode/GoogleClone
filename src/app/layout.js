import Header from "@/components/Header";
import "./globals.css";
import SessionProviders from "@/components/SessionProviders";
import { SessionProvider } from "next-auth/react";
export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProviders>
          <Header />
          {children}
        </SessionProviders>
      </body>
    </html>
  );
}
