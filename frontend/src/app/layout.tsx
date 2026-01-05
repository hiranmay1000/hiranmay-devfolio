import { DM_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { metadata as siteMetadata } from "./metadata";
import Providers from "./providers";
import ClientLayout from "./client-layout";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
