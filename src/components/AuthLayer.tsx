import React from "react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { setLoading } from "@/store/loading";

const AuthLayer = ({ children: Component }: any) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    setLoading(status === "loading");
    if (!session && status !== "loading") {
      router.replace(`/authorize?to=${router ? router.asPath : "/"}`);
    }
  }, [session, status]);

  if (session && status === "authenticated") {
    return Component;
  }

  return <></>;
};

export default AuthLayer;
