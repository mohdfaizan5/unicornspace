import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/navbar";
import Footer from "@/components/footer";
import { GoogleTagManager } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });
const bebas = Anton({
  weight: "400",
  variable: "--bebas-neue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Unicorn Space",
    template: "%s - Unicorn Space",
  },
  description:
    "UnicornSpace is a small software studio based in Bangalore. We build our own products, run experiments, and share what we learn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="noise" lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />

      <body className={inter.className + " antialiased"}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
