import GetServerSession from "@/context/server/GetSession";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import AccountPage from "./components/AccountPage";
import Navigation from "../MainComponents/Navigation";
import MainFooter from "../MainComponents/MainFooter";

const page = () => {
  return(
    <div className="w-full min-h-[100vh] flex flex-col justify-between">
      <div className="w-full">
        <Navigation />
      </div>
      <div className="w-full">
        <div className="flex justify-center">
          <section className="w-full max-w-[1399px]">
          <AccountPage />
          </section>
        </div>
      </div>
      <div className="w-full">
        <MainFooter />
      </div>
    </div>
  );
};

export default page;
