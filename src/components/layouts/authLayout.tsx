"use client";
import { getUserToken } from "@/utils/Functions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useLayoutEffect } from "react";

interface IProps {
  children: ReactNode;
  maxWidth?: string;
}

const AuthLayout: FC<IProps> = ({ children, maxWidth = "500" }) => {
  const route = useRouter();
  const token = getUserToken();

  useLayoutEffect(() => {
    if (token) {
      route.push("/admin/dashboard");
    }
  }, [token]);
  if (token || typeof window === "undefined") return <></>;

  return (
    <div className="min-h-[100vh] flex justify-center items-center bg-adminBg p-4">
      <div className="grow">
        <Image
          src="/assets/image/logo.png"
          width={154}
          height={154}
          alt="logo"
          className="mx-auto h-[56px]"
        />
        <div className="basis-[50%] flex items-center justify-center my-6">
          <div
            style={{ maxWidth: maxWidth + "px" }}
            className={`border-[1px] border-borderColor bg-white min-h-[100px] w-full rounded-[10px] px-[50px] py-[48px] max-[500px]:px-[20px]`}
          >
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
