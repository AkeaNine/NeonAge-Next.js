"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const page = () => {
  const { toast } = useToast();
  const router = useRouter()
  const form = useForm({
    defaultValues: {
      email: "",
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
      .post("/api/user/resetPass", data)
      .then((res) => {
        console.log(res);

        if (res.status === 200) {
          // redirect("http://localhost:3000/account/reset_password/confirmation");
          router.replace("/account/reset_password/confirmation")
        }
      })
      .catch((err) => {
        toast({
          variant: "destructive",
          description: err.response.data,
        });
      });
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[500px] py-10 px-4">
        <h1 className="text-xl">Enter your Email</h1>
        <div>
          <p className="py-4">
            We will send a link to your email. You will be able to change your
            password by following the instructions through the link
          </p>
          <form onSubmit={handleSubmit(OnFormSubmit)}>
            <Input
              placeholder="Your Email"
              type="email"
              {...register("email", {
                required: "Enter a valid email",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
            />
            <p className="mt-1 mb-2 text-xs text-red-500">
              {errors.email?.message}
            </p>
            <Button className="mt-4">Confirm</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;