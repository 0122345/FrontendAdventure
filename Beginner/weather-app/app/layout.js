import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App",
  description: "Created by Ntwari Ashimwe Fiacre",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-col w-dvw h-dvh">
          {children}
        </section> 
        </body>
    </html>
  );
}
