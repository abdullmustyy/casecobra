import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import { AuthProvider } from "./AuthProvider";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

const title = "CaseCobra";
const description = "Your Image on a Custom Phone Case.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description,
  generator: "Next.js",
  applicationName: "Casecobra",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript", "TypeScript", "E-Commerce"],
  authors: [
    { name: "Abdullahi Mustafa", url: "https://abdullahimustafa.vercel.app" },
  ],
  creator: "Abdullahi Mustafa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={recursive.className}>
          <Navbar />

          <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)] grainy-light">
            <div className="flex-1 flex flex-col h-full">
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </main>

          <Toaster />
        </body>
      </html>
    </AuthProvider>
  );
}
