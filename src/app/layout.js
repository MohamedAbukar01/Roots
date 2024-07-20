import Header from "./components/Header";
import { Almarai } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartContext";
import { SessionProvider } from "next-auth/react";
const inter = Almarai({ 
  subsets: ["arabic"],
  weight:['300','400','700'] });

export const metadata = {
  title: "Roots",
  description: "Rooted In Nature",
};

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
        <CartProvider>
          <Header/>
          {children}
          <Footer/>
        </CartProvider>

        </SessionProvider>
       
        
        </body>
    </html>
  );
}
