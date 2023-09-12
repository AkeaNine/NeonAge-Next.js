"use client"

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <p>Sign out of this Device</p>
      <Button onClick={() => signOut()}>SignOut</Button>
    </div>
  );
};

export default SignOut;
