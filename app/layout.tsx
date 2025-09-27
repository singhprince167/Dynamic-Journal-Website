import "./globals.css";

import NavbarWrapper from "../components/NavbarWrapper";
import FooterWrapper from "../components/FooterWrapper";

export const metadata = {
  title: "Dynamic Journal Website",
  description: "A modern, dynamic journal website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <NavbarWrapper />
        <main className="min-h-screen">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
