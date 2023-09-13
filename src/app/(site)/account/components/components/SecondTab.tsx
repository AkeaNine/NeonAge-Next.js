"use client";
import React, { useState } from "react";
import InformationForm from "./InformationForm";
import PasswordForm from "./PasswordForm";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SecondTab = () => {
  const [isLoading, setIsLOading] = useState(false);
  function SetLoad(x: boolean) {
    if (x) {
      setIsLOading(true);
    } else {
      setIsLOading(false);
    }
  }
  function Logout() {
    setIsLOading(true)
    signOut()
  }
  return (
    <>
      <div className="flex flex-col space-y-2">
        <InformationForm func={SetLoad} />
        <PasswordForm func={SetLoad} />
        <div className="flex justify-between items-center mt-4">
          <p>Sign out of this Device</p>
          <Button onClick={Logout}>SignOut</Button>
        </div>
      </div>
      <div
        className={`loader-container ${
          isLoading ? "loader-open" : "loader-close"
        } absolute top-0 left-0 h-full w-full flex justify-center items-center`}
      >
        <span className="loader"></span>
      </div>
    </>
  );
};

export default SecondTab;
