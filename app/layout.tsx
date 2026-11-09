import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "CreatorColab — Brands meet creators", description: "Discover creators, launch collaborations and manage campaigns in one place." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
