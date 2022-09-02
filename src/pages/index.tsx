import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

import { Text } from "@mantine/core";
import { useEffect } from "react";
import { setLoading } from "@/store/loading";
import AuthLayer from "@/components/AuthLayer";

const Home: NextPage = () => {
  const hello = trpc.useQuery([
    "example.hello",
    { text: "from v2.starter.nextjs" },
  ]);

  setLoading(true);

  useEffect(() => {
    setLoading(hello.isLoading);
  }, [hello]);

  return (
    <>
      <Text>{hello.data ? <p>{hello.data.greeting}</p> : ""}</Text>
    </>
  );
};

export default Home;
