import { Inter } from "next/font/google";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Msme interview session",
  description:
    "Form Xpress is the a web app to collect information from your target audience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className}  bg-primary-1000 text-primary-100`}
      >
        <Header />
        <main className="  max-w-6xl mx-auto  ">{children}</main>
        <footer className="bg-black ">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
