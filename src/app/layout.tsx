import type { Metadata } from "next";
import SettingModalProvider from "@/providers/SettingModalProvider";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import WalletProvider from "@/providers/WalletProvider";
import { Open_Sans } from "next/font/google";
import ClientLayout from "@/components/layout/ClientLayout";
import { Fuzzy_Bubbles } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
});

const fuzzyBubbles = Fuzzy_Bubbles({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fuzzy-bubbles",
});

export const metadata: Metadata = {
  title: "Pebubu",
  description: "Pebubu NFT Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <body
        className={`${openSans.variable} font-sans bg-cover h-screen bg-opacity-50 -z-10 fixed left-0 right-0 top-0 bottom-0 flex flex-row`}
      > */}
      <body
        className={`${fuzzyBubbles.variable} font-fuzzy bg-cover h-screen bg-opacity-50 -z-10 fixed left-0 right-0 top-0 bottom-0 flex flex-row`}
      >
        <div className="w-full h-full absolute left-0 top-0 bg-[url('/home/background.png')] -z-20 bg-cover"></div>
        <SettingModalProvider>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <WalletProvider>
            <ClientLayout>{children}</ClientLayout>
          </WalletProvider>
        </SettingModalProvider>
      </body>
    </html>
  );
}
