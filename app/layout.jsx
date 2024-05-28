import { Jost } from "next/font/google";
import "./globals.css";
import configurations from "@/_data/config";
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/footer/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: configurations.metadata.title,
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
