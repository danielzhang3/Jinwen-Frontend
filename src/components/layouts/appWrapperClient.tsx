"use client";
import useFetch from "@/hooks/useFetch";
import { useStore } from "@/store";
import { getUser } from "@/utils/Functions";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

const AppWrapperClient = ({ children, data }) => {
  const pathname = usePathname();
  const router = useRouter();
  const storeData = useStore((state: any) => state);
  const { states, updateStates, investor_types, updateInvestorTypes, setUser } =
    storeData;

  useEffect(() => {
    if (!states.length) {
      updateStates(data?.states);
    }
    if (!investor_types.length) {
      updateInvestorTypes(data?.investorType);
    }
  }, []);

  const checkUserRole = async () => {
    const user = await getUser();
    setUser(user ?? null);
    const roleId = user?.role?.id;
    if (roleId === 1 && pathname.startsWith("/investor")) {
      router.replace("/admin/dashboard");
    }
    if (roleId === 2 && pathname.startsWith("/admin")) {
      router.replace("/investor/dashboard");
    }
  };
  useLayoutEffect(() => {
    checkUserRole();
  }, []);

  return <>{children}</>;
};

export default AppWrapperClient;
