import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { silkscreen, ptmono, montserrat, atkinson } from "@/lib/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "🐐 template",
  description: "Nextjs(Typescript) + TailwindCSS + ShadCN + Zod + more...",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${silkscreen} ${ptmono} ${montserrat} ${atkinson}`}>
        <link
          rel="stylesheet"
          href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <div className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-pink-200/50">
              <Header />
            </div>
            <main className="flex-grow pt-[56px] overflow-y-auto p-6 FONT-montserrat">
              <div className="max-w-2xl mx-auto">{children}</div>
            </main>
            <div className="fixed bottom-0 left-0 right-0 z-10">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
