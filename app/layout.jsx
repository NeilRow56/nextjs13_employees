import "./globals.css";
import { Providers } from "./components/Provider";
import ReactQueryWrapper from "../app/ReactQueryWrapper";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ReactQueryWrapper>
          <Providers>{children}</Providers>
        </ReactQueryWrapper>
      </body>
    </html>
  );
}
