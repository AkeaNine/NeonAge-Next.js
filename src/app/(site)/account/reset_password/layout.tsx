import { Toaster } from "@/components/ui/toaster";
import SessionContext from "@/context/SessionContext";
import { Inter } from "next/font/google";
import Navigation from "../../MainComponents/Navigation";
import MainFooter from "../../MainComponents/MainFooter";

const lato = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={lato.className}>
      <body>
        <SessionContext>
          <div className="w-full min-h-[100vh] flex flex-col justify-between">
            <div className="w-full">
              <Navigation />
            </div>
            <div className="w-full">
              <div className="flex justify-center">
                <section className="w-full max-w-[1399px]">{children}</section>
              </div>
            </div>
            <div className="w-full">
              <MainFooter />
            </div>
          </div>
          <Toaster />
        </SessionContext>
      </body>
    </html>
  );
}
