"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface InformationFormProps {
  func: (x: boolean) => void;
}

const InformationForm: React.FC<InformationFormProps> = ({func}) => {

  const { toast } = useToast();
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = form;

  const OnFormSubmit: SubmitHandler<FieldValues> = async (data) => {
    func(true)
    await axios
      .post("/api/user/updateInfo", data)
      .then((res) => {
        func(false)
        if (res.status === 200) {
          reset()
          toast({
            title: "Information Updated",
            description: "Your information was updated successfully.",
          });
          router.refresh();
        }
      })
      .catch((err) => {
        func(false)
        toast({
          variant: "destructive",
          description: err.response.data,
        });
      });
  };

  return (
    <div>
      <Label className="border-b border-gray-500 text-lg">
        Change Information
      </Label>
      <form onSubmit={handleSubmit(OnFormSubmit)}>
        <div className="flex flex-col space-y-2">
          <div>
            <Label>First Name</Label>
            <Input
              {...register("firstName", {
                required: "Enter your First name",
              })}
            />
            <p className="mt-1 mb-2 text-xs text-red-500">
              {errors.firstName?.message}
            </p>
          </div>
          <div>
            <Label>Last Name</Label>
            <Input
              {...register("lastName", {
                required: "Enter your Last name",
              })}
            />
            <p className="mt-1 mb-2 text-xs text-red-500">
              {errors.lastName?.message}
            </p>
          </div>
          <Button className="bg-gray-700">Update</Button>
        </div>
      </form>
    </div>
  );
};

export default InformationForm;
