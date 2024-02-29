
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Makistour",
  description: "Expertos en turismo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
