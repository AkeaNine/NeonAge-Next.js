"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const VerifyForm = () => {
  const [isLoading, setIsLOading] = useState(false);
  const [urlToken, setUrlToken] = useState<string | null>("");
  const [pass, setPass] = useState("");
  const searchParams = useSearchParams()

  useEffect(() => {
    const token = searchParams.get("token")
    setUrlToken(token);
  });

  const router = useRouter();
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      newPass: pass,
      repeatPass: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const OnFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    const newArr = {
      data: data,
      token: urlToken,
    };
    console.log(newArr);

    await axios
      .post("/api/user/validatePass", newArr)
      .then((res) => {
        console.log(res);

        if (res.statusText === "Verification time Expired!") {
          toast({
            variant: "destructive",
            description:
              "Verification Time expired. please request to change password again",
          });
          router.replace("/account/reset_password");
        }

        if (res.status === 200) {
          router.replace("/account/reset_password/success");
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
    <>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[500px] py-10 px-4">
          <h1 className="text-xl">Change Password</h1>
          <div>
            <p className="py-4">
              Enter the new password you had like to use with your account
            </p>
            <form onSubmit={handleSubmit(OnFormSubmit)}>
              <div>
                <Label>New Password</Label>
                <Input
                  placeholder="new password"
                  type="password"
                  onInput={(event) =>
                    setPass((event.target as HTMLInputElement).value)
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
                <Label>Repeat new password</Label>
                <Input
                  placeholder="repeat password"
                  type="password"
                  {...register("repeatPass", {
                    required: "Repeat the new password",
                    validate: (value) => {
                      if (value !== pass) {
                        return "Repeat the new password again.";
                      }
                    },
                  })}
                />
                <p className="mt-1 mb-2 text-xs text-red-500">
                  {errors.repeatPass?.message}
                </p>
              </div>
              <Button className="mt-4">Confirm</Button>
            </form>
          </div>
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

export default VerifyForm;
