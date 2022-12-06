import { useTranslation } from "react-i18next";
import { gql, useQuery } from "@apollo/client";
import { PropsWithChildren, useEffect } from "react";
import { setLoading } from "store/slices/toploading";

function ProfileInfo({
  name,
  description,
  username,
}: PropsWithChildren<{
  name: string;
  description: string;
  username?: string;
}>) {
  return (
    <div className="w-full px-8">
      <div className="flex justify-between">
        <div
          className="flex flex-col justify-center gap-2"
          aria-label="name and username"
        >
          <div className="font-semibold text-2xl">{name}</div>
          <div className="font-semibold text-light-gray-80 dark:text-dark-gray-50">
            {username}
          </div>
        </div>
      </div>
      <div className="w-full">
        <p className="whitespace-pre-line">{description}</p>
      </div>
    </div>
  );
}

export default ProfileInfo;
