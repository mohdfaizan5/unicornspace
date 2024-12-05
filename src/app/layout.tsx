import type { Metadata } from "next";
import { Inter, Anton } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/Navbar";
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
    "Turn your ideas into successful online businesses | Unicorn Space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GoogleTagManager gtmId={process.env.GOOGLE_TAG_MANAGER_ID as string} />

      <body className={inter.className + " text-zinc-300"}>
        <Header />

        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
        {children}
        {/* </ThemeProvider> */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
