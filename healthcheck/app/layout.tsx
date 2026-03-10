import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "HealthCheck — Free Health Self-Assessments",
    template: "%s | HealthCheck",
  },
  description:
    "Free, science-based health self-assessment quizzes. Screen for vitamin and mineral deficiencies with evidence-based tools. Educational screening — not medical diagnoses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-white text-gray-900">
        <Header />
        <main className="mx-auto max-w-5xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
