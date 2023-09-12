"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const PasswordForm = () => {
  const [password, setPassword] = useState("");

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      currentPass: "",
      newPass: "",
      repeatPass: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const OnFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    
    await axios
      .post("/api/user/updatePass", data)
      .then((res) => {
        console.log(res);
        
        if (res.status === 200) {
          toast({
            title: "Password Updated",
            description: "Your password was updated successfully.",
          });
          router.refresh();
        }
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          description: err.response.data,
        });
      });
  };

  function isPasswordValid(password: string): boolean {
    return password.length >= 8;
  }

  return (
    <div>
      <Label className=" underline text-lg">Change Password</Label>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        <div className="flex flex-col space-y-2">
          <div>
            <Label>Current Password</Label>
            <Input
            type="password"
              {...register("currentPass", {
                required: "Enter your current password",
              })}
            />
            <p className="mt-1 mb-2 text-xs text-red-500">
              {errors.currentPass?.message}
            </p>
          </div>
          <div>
            <Label>New Password</Label>
            <div>
              <Input
              type="password"
                onInput={(event) =>
                  setPassword((event.target as HTMLInputElement).value)
                }
                {...register("newPass", {
                  required: "Enter the new password",
                  validate: (value) => {
                    if (!isPasswordValid(value)) {
                      return "Password should be atleast 8 charecters long.";
                    }
                  },
                })}
              />
              <p className="mt-1 mb-2 text-xs text-red-500">
                {errors.newPass?.message}
              </p>
            </div>
            <div>
              <Label>Repeat Password</Label>
              <Input
              type="password"
                {...register("repeatPass", {
                  required: "Repeat the new password",
                  validate: (value) => {
                    if (value !== password) {
                      return "Repeat the new password again.";
                    }
                  },
                })}
              />
              <p className="mt-1 mb-2 text-xs text-red-500">
                {errors.repeatPass?.message}
              </p>
            </div>
          </div>
          <Button className="bg-gray-700">Update</Button>
        </div>
      </form>
      <div className="flex">
        <p>Forgot your password?</p>
        <Link href={"/account/reset_password"} className="text-blue-600">Click here</Link>
      </div>
    </div>
  );
};

export default PasswordForm;
