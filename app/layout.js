import "./globals.css";
import Header from "./components/header/Header";



export const metadata = {
  title: "Makistour",
  description: "Expertos en turismo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
