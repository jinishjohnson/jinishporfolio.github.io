import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"]
});



export const metadata = {
  title: "Portfolio of Jinish Johnson",
  description: "Portfolio of Jinish Johnson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
