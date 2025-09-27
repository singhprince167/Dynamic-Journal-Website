"use client";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;
  return <Footer />;
}
