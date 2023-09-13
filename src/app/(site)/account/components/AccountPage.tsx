import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { MdVerified } from "react-icons/md";
import InformationForm from "./components/InformationForm";
import PasswordForm from "./components/PasswordForm";
import getUserData from "@/hooks/user/getUserData";
import SignOut from "./components/SignOut";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import SecondTab from "./components/SecondTab";

const AccountPage = async () => {
  // const session = useSession();

  const user = await getUserData();

  return (
    <div className="w-full flex justify-center p-4">
      <Tabs defaultValue="account" className="w-full max-w-[500px]">
        <TabsList className="w-full">
          <TabsTrigger value="account" className="w-2/4">
            Account
          </TabsTrigger>
          <TabsTrigger value="security" className="w-2/4">
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <div>
                <Label>
                  <p className=" w-fit p-2 mt-2">First Name</p>
                </Label>
                <p className=" bg-slate-100 p-2 mt-1">{user?.firstName}</p>
              </div>
              <div>
                <Label>
                  <p className=" w-fit p-2 mt-2">Last Name</p>
                </Label>
                <p className=" bg-slate-100 p-2 mt-1">{user?.lastName}</p>
              </div>
              <div>
                <Label>
                  <p className=" w-fit p-2 mt-2">Email</p>
                </Label>
                <p className=" bg-slate-100 p-2 mt-1">{user?.email}</p>
              </div>
            </div>
            <div className="bg-slate-100 flex flex-col space-y-2 p-2">
              <div className="bg-white">
                <Link href={"/account/orders"}>
                  <div className="flex justify-between items-center p-2 text-base">
                    <p className=" uppercase">Orders</p>
                    <IoIosArrowForward size={22} />
                  </div>
                </Link>
              </div>
              <div className="bg-white">
                <Link href={"/account/returns"}>
                  <div className="flex justify-between items-center p-2 text-base">
                    <p className=" uppercase">Returns</p>
                    <IoIosArrowForward size={22} />
                  </div>
                </Link>
              </div>
              <div className="bg-white">
                <Link href={"/account/coupons"}>
                  <div className="flex justify-between items-center p-2 text-base">
                    <p className=" uppercase">Coupons</p>
                    <IoIosArrowForward size={22} />
                  </div>
                </Link>
              </div>
              <div className="bg-white">
                <Link href={"/account/favorites"}>
                  <div className="flex justify-between items-center p-2 text-base">
                    <p className=" uppercase">Favorites</p>
                    <IoIosArrowForward size={22} />
                  </div>
                </Link>
              </div>
              <div className="bg-white">
                <Link href={"/account/star-points"}>
                  <div className="flex justify-between items-center p-2 text-base">
                    <p className=" uppercase">Star points</p>
                    <IoIosArrowForward size={22} />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security">
          <SecondTab />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AccountPage;
