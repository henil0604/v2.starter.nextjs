import useOnlineStatus from "@/hooks/useOnLine";
import Offline from "@/components/Offline";
import $loading from "@/store/loading";
import { useRecoilValue } from "recoil";
import { LoadingOverlay } from "@mantine/core";

export default function Layer({ children }: { children: JSX.Element }) {
  const isOnline = useOnlineStatus();
  const loading = useRecoilValue($loading);

  return (
    <>
      {!isOnline && <Offline />}
      <LoadingOverlay
        style={{ width: "100vw", height: "100vh" }}
        loaderProps={{ variant: "bars" }}
        visible={isOnline && loading}
        overlayBlur={10}
      />
      {isOnline && typeof children !== "undefined" && children}
    </>
  );
}
