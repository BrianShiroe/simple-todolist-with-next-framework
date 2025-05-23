import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "To-Do App",
  description: "A simple Next.js To-Do App with Dark Mode",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <main className="max-w-3xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
