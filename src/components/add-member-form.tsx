import { userSchema } from "@/validation/user.schema";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useUserStore } from "@/store/store";
import React, { useState } from "react";

const AddMemberForm = ({ onSubmit }: { onSubmit: () => void }) => {
  const { addLocalUser } = useUserStore();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const formData = new FormData(e.currentTarget);
    console.log("formData", formData);
    const values = Object.fromEntries(formData);
    console.log("values", values);
    const parsed = userSchema.safeParse(values);
    console.log("parsed", parsed);

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((error) => {
        fieldErrors[error.path[0] as string] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    addLocalUser({
      id: Date.now().toString(),
      ...parsed.data,
    });

    onSubmit();
  };
  return (
    // <div className="max-h-[80vh] overflow-y-auto pr-2">
    <form onSubmit={handleSubmit}>
      {/* BASIC INFO */}
      <div className="space-y-4">
        {/* Name */}
        <div className="">
          <label
            htmlFor="name"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Name<span className="text-red-500">*</span>
          </label>
          <Input id="name" name="name" placeholder="Enter full name" required />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div className="">
          <label
            htmlFor="email"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Email<span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            required
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div className="">
          <label
            htmlFor="phone"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Phone<span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            name="phone"
            placeholder="Enter phone number"
            required
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone}</p>
          )}
        </div>
      </div>

      {/* OPTIONAL DETAILS */}
      <details className="group rounded-lg border p-4 my-2">
        <summary className="cursor-pointer text-sm font-medium text-muted-foreground">
          Additional Details (Optional)
        </summary>

        <div className="mt-4 space-y-6">
          {/* Website */}
          <div className="space-y-1">
            <label className="text-sm text-muted-foreground">Website</label>
            <Input name="website" placeholder="https://example.com" />
          </div>

          {/* Address */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Address</p>

            <Input name="street" placeholder="Street" />
            <Input name="suite" placeholder="Suite / Apartment" />
            <div className="grid grid-cols-2 gap-3">
              <Input name="city" placeholder="City" />
              <Input name="zipcode" placeholder="Zipcode" />
            </div>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Company</p>
            <Input name="companyName" placeholder="Company name" />
            <Input name="catchPhrase" placeholder="Catch phrase" />
            <Input name="bs" placeholder="Business slogan" />
          </div>
        </div>
      </details>

      {/* ACTION */}
      <Button type="submit" className="w-full">
        Add Member
      </Button>
    </form>
    // </div>
  );
};

export default AddMemberForm;
