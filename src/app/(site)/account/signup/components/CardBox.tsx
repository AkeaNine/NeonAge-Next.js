"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";

const CardBox = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [isLoading, setIsLOading] = useState(false);


  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      re_pass: "",
      checkBox: false,
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const OnFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLOading(true)
    const userData = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/api/signup", data)
      .then((res) => {
        if (res.status === 200) {
          signIn("credentials", userData);
        }
      })
      .catch((err) => {
        setIsLOading(false)
        toast({
          variant: "destructive",
          title: "Something went wrong.",
          description: err.response.data,
        });
      });
  };

  const checkTheBox = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };

  function isPasswordValid(password: string): boolean {
    return password.length >= 8;
  }

  return (
    <>
    <div className="w-full max-w-[500px]">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Create an Account</CardTitle>
          <CardDescription className="text-center p-2 pt-0">
            Sign up to get special benefits and offers
          </CardDescription>
          <hr />
        </CardHeader>
        <CardContent className="pb-2">
          <div className="pb-4">
            <form onSubmit={handleSubmit(OnFormSubmit)}>
              <div className="flex flex-col space-y-4">
                <div className="flex space-x-4">
                  <div>
                    <Label>
                      <span className="text-red-400">*</span>First Name
                    </Label>
                    <Input
                      className=" focus:outline-1"
                      {...register("firstName", {
                        required: "Enter your First name",
                      })}
                    />
                    <p className="mt-1 mb-2 text-xs text-red-500">
                      {errors.firstName?.message}
                    </p>
                  </div>
                  <div>
                    <Label>
                      <span className="text-red-400">*</span>Last Name
                    </Label>
                    <Input
                      className=" focus:outline-1"
                      {...register("lastName", {
                        required: "Enter your Last name",
                      })}
                    />
                    <p className="mt-1 mb-2 text-xs text-red-500">
                      {errors.lastName?.message}
                    </p>
                  </div>
                </div>
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
                      onInput={(event) =>
                        setPassword((event.target as HTMLInputElement).value)
                      }
                      {...register("password", {
                        required: "Enter your password",
                        validate: (value) => {
                          if (!isPasswordValid(value)) {
                            return "Password should be atleast 8 charecters long.";
                          }
                        },
                      })}
                    />
                    <p className="mt-1 mb-2 text-xs text-red-500">
                      {errors.password?.message}
                    </p>
                  </div>
                  <div>
                    <Label>
                      <span className="text-red-400">*</span>Repeat Password
                    </Label>
                    <Input
                      {...register("re_pass", {
                        required: "Re-type your password",
                        validate: (value) => {
                          if (value !== password) {
                            return "Repeat the password again.";
                          }
                        },
                      })}
                    />
                    <p className="mt-1 mb-2 text-xs text-red-500">
                      {errors.re_pass?.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={checked}
                    onClick={checkTheBox}
                    required
                    {...register("checkBox")}
                  />
                  <p className="text-xs md:text-sm">
                    I have read and agree to the{" "}
                    <Link href={"/"} className="text-blue-500 hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </div>
                <div>
                  <Button type="submit">Create Account</Button>
                </div>
              </div>
            </form>
          </div>
          <hr />
        </CardContent>
        <div className="p-2 pt-0">
          <p className="text-center">
            Already have an account?
            <Link
              href={"/account/signin"}
              className="text-blue-500 hover:underline"
            >
              {" "}
              Go to sign in
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
    </>
  );
};

export default CardBox;
