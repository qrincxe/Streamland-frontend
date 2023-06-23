import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/context/GlobalProvider";
import Sidebar from "./component/sidenav/Sidebar";
import Topnav from "./component/topnav/Topnav";
import { Toaster } from "react-hot-toast";
import ProgressBar from "./component/progressbar/ProgressBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div>
            <ProgressBar />
            <Sidebar />
            <Topnav />
            <section className="pl-56 max-md:pl-0">{children}</section>
          </div>
        </Providers>
      </body>
    </html>
  );
}
