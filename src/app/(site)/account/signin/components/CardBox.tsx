"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const CardBox = () => {
  const [isLoading, setIsLOading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const OnFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLOading(true);
    try {
      signIn("credentials", {
        ...data,
        redirect: false,
      }).then((res) => {
        if (res?.error) {
          setIsLOading(false);
          toast({
            variant: "destructive",
            title: "Invalid Credentials",
            description: "Make sure you entered the right information",
          });
        } else {
          router.replace("/account");
        }
      });
    } catch (error: any) {
      setIsLOading(false);
      toast({
        variant: "destructive",
        description: "Something went wrong. Please refresh and try again",
      });
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[500px]">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              Sign into your Account
            </CardTitle>
            <CardDescription className="text-center p-2 pt-0">
              Sign to enjoy special benefits and offers
            </CardDescription>
            <hr />
          </CardHeader>
          <CardContent className="pb-2">
            <div className="pb-4">
              <form onSubmit={handleSubmit(OnFormSubmit)}>
                <div className="flex flex-col space-y-4">
                  <div>
                    <Label>
                      <span className="text-red-400">*</span>Email
                    </Label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", {
                        required: "Enter a valid email",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email format",
                        },
                      })}
                    />
                    <p className="mt-1 mb-2 text-xs text-red-500">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <div>
                      <Label>
                        <span className="text-red-400">*</span>Password
                      </Label>
                      <Input
                        type="password"
                        placeholder="Enter password"
                        {...register("password", {
                          required: "Enter your password",
                        })}
                      />
                      <p className="mt-1 mb-2 text-xs text-red-500">
                        {errors.password?.message}
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <p>Forgot your password?</p>
                    <Link
                      href={"/account/reset_password"}
                      className="text-blue-600"
                    >
                      Click here
                    </Link>
                  </div>
                  <div>
                    <Button type="submit">Sign in</Button>
                  </div>
                </div>
              </form>
            </div>
            <hr />
          </CardContent>
          <div className="p-2 pt-0">
            <p className="text-center">
              No account?
              <Link
                href={"/account/signup"}
                className="text-blue-500 hover:underline"
              >
                Create one here
              </Link>
            </p>
          </div>
        </Card>
      </div>
      <div
        className={`loader-container ${
          isLoading ? "loader-open" : "loader-close"
        } absolute top-0 left-0 h-full w-full flex justify-center items-center`}
      >
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default CardBox;
