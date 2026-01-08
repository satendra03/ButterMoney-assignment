import { Button } from "@/components/ui/button";
import { LoaderCircle, PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import User from "./user";
import type { UserType } from "@/types";
import { useUserStore } from "@/store/store";
import { filteredUsersByNameOrEmail } from "@/lib/utils";
import { useEffect } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import AddMemberForm from "./add-member-form";
import { useState } from "react";
import { toast } from "sonner";

const UserList = () => {
  const { fetchUsers, searchUsers, loading, error } = useUserStore();
  const users = filteredUsersByNameOrEmail();
  const [openForm, setOpenForm] = useState(false);

  //   this will fetch users from API
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    searchUsers(query);
  };

  const handleSuccess = () => {
    setOpenForm(false);
    toast.success("User added successfully");
  };

  return (
    <div className="user-list y-space">
      <div className="options w-full flex items-center justify-between">
        <div className="title flex flex-col tracking-tight">
          <p className="text-sm text-muted-foreground">Manage your members</p>
          <p className="text-2xl font-semibold tracking-tight">Members</p>
        </div>
        <div className="add-user flex items-center justify-end">
          <AlertDialog open={openForm} onOpenChange={setOpenForm}>
            <AlertDialogTrigger asChild>
              <Button>
                <PlusIcon /> Add User
              </Button>
            </AlertDialogTrigger>

            <AlertDialogContent className="max-h-[80vh] overflow-y-auto">
              <AlertDialogHeader>
                <AlertDialogTitle>Add new member</AlertDialogTitle>
                <AlertDialogDescription>
                  Enter member details below
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AddMemberForm onSubmit={handleSuccess} />

              <AlertDialogFooter>
                <AlertDialogCancel className="w-full">Cancel</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Search and Total Members */}
      <div className="user-list-info py-3 flex items-center justify-between">
        <div className="search-user w-3/5 md:w-8/12">
          <label
            htmlFor="search"
            className="text-sm text-muted-foreground cursor-pointer"
          >
            Search User
          </label>
          <Input
            id="search"
            name="search"
            className="w-full"
            placeholder="Enter name or email..."
            onChange={handleSearch}
          />
        </div>
        <div className="user-list-info flex flex-col items-end justify-center w-2/5 md:w-4/12">
          <p className="text-sm text-muted-foreground">Total Members</p>
          <p className="text-2xl font-semibold tracking-tight">
            {users?.length}
          </p>
        </div>
      </div>

      {/* User List */}
      <div className="user-list y-space min-h-screen">
        {loading && (
          <div className="w-full flex items-center justify-center">
            <LoaderCircle className="animate-spin" />
          </div>
        )}

        {error && (
          <div className="w-full flex items-center justify-center text-red-500">
            Error: {error}
          </div>
        )}

        {!loading && users?.length === 0 && (
          <div className="w-full flex items-center justify-center text-red-500">
            No users found
          </div>
        )}

        {users?.map((user: UserType) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
