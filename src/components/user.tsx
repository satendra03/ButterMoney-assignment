import type { UserType } from "@/types";
import { Ellipsis, User2Icon } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogAction,
  AlertDialogDescription,
} from "./ui/alert-dialog";
import { useState } from "react";

const User = ({ user }: { user: UserType }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Additional Information</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription className="space-y-4 text-sm">
            {/* WEBSITE */}
            <div className="flex items-start gap-3">
              <div className="font-medium text-muted-foreground min-w-[90px]">
                Website
              </div>
              <a
                href={user.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary flex items-center gap-1 underline-offset-4 hover:underline break-all"
              >
                {user.website || "—"}
              </a>
            </div>

            {/* ADDRESS */}
            <div className="flex items-start gap-3">
              <div className="font-medium text-muted-foreground min-w-[90px]">
                Address
              </div>
              <div className="leading-relaxed text-foreground">
                {user.address ? (
                  <>
                    <p>{user.address.street}</p>
                    <p>{user.address.suite}</p>
                    <p>
                      {user.address.city}, {user.address.zipcode}
                    </p>
                    <p className="text-muted-foreground">
                      Coordinates: {user?.address?.geo?.lat}, {user?.address?.geo?.lng}
                    </p>
                  </>
                ) : (
                  "—"
                )}
              </div>
            </div>

            {/* COMPANY */}
            <div className="flex items-start gap-3">
              <div className="font-medium text-muted-foreground min-w-[90px]">
                Company
              </div>
              <div className="space-y-1">
                <p className="font-medium">{user.company?.name || "—"}</p>
                {user.company?.catchPhrase && (
                  <p className="italic text-muted-foreground">
                    “{user.company.catchPhrase}”
                  </p>
                )}
                {user.company?.bs && (
                  <p className="text-xs text-muted-foreground">
                    {user.company.bs}
                  </p>
                )}
              </div>
            </div>
          </AlertDialogDescription>

          <AlertDialogFooter>
            <AlertDialogAction>OK</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <div className="user border-b flex items-center justify-between py-3">
        <div className="main-info flex items-center">
          <div className="user-icon h-10 w-10 flex items-center">
            <User2Icon />
          </div>
          <div className="user-details flex flex-col">
            <p className="font-semibold">{user.name}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${user.email}`}
              className="text-sm text-muted-foreground break-all"
            >
              {user.email.toLocaleLowerCase()}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`tel:${user.phone}`}
              className="text-sm text-muted-foreground break-all"
            >
              {user.phone}
            </a>
          </div>
        </div>
        <div className="extra-details flex items-center cursor-pointer transition">
          <Ellipsis
            className="text-muted-foreground hover:text-foreground"
            onClick={() => setOpen(true)}
          />
        </div>
      </div>
    </>
  );
};

export default User;
