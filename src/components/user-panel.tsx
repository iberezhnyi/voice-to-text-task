"use client";

import { FC } from "react";
import { useUser, UserButton } from "@clerk/nextjs";

const UserInfo: FC = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-4">
      {user && (
        <div className="text-sm text-gray-300">
          <p className="font-bold text-purple-400">
            {user.firstName || "User"}
          </p>
          <p className="text-xs text-gray-400">{user.username}</p>
        </div>
      )}
      <UserButton />
    </div>
  );
};

export default UserInfo;
