import { Button, Center, LoadingOverlay } from "@mantine/core";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons";
import { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { setLoading } from "@/store/loading";

const ContinueWithGoogle = () => {
  const router = useRouter();

  const to = router.query.id?.toString();

  const handleClick = () => {
    signIn("google", {
      callbackUrl: to ?? "/",
    });
  };

  return (
    <>
      <Button
        onClick={handleClick}
        leftIcon={<IconBrandGoogle />}
        variant='default'
        color='gray'
      >
        Continue with Google
      </Button>
    </>
  );
};

const ContinueWithGithub = () => {
  const router = useRouter();

  const to = router.query.to?.toString();

  const handleClick = () => {
    signIn("github", {
      callbackUrl: to ?? "/",
    });
  };

  return (
    <>
      <Button
        onClick={handleClick}
        leftIcon={<IconBrandGithub size={20} />}
        color='dark'
      >
        Continue with Github
      </Button>
    </>
  );
};

const Authorize: NextPage = () => {
  const { data: session, status: sessionStatus } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.replace(router?.query?.id?.toString() || "/");
    }

    setLoading(sessionStatus === "loading");
  }, [router, session, sessionStatus]);

  if (sessionStatus !== "loading") {
    return (
      <Center
        style={{ width: "100vw", height: "100vh", flexDirection: "column" }}
      >
        <ContinueWithGoogle />
        <br />
        <ContinueWithGithub />
      </Center>
    );
  }

  return <></>;
};

export default Authorize;
