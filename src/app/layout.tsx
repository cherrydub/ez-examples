import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { silkscreen, ptmono, montserrat } from "@/lib/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🐐 template",
  description: "Nextjs(Typescript) + TailwindCSS + ShadCN + Zod + more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${silkscreen} ${ptmono} ${montserrat}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-screen">
            <Header />

            <main className="flex-grow overflow-y-auto">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
