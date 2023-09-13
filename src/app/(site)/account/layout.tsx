import { Toaster } from "@/components/ui/toaster";
import SessionContext from "@/context/SessionContext";
import { Inter } from "next/font/google";
import Navigation from "../MainComponents/Navigation";
import MainFooter from "../MainComponents/MainFooter";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-between">
      <div className="w-full">
        <Navigation />
      </div>
      <div className="w-full">
        <div className="flex justify-center relative">
          <section className="w-full max-w-[1399px] flex justify-center p-4">
            {children}
          </section>
        </div>
      </div>
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  );
}
