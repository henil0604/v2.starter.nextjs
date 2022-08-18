import type { NextPage } from "next";
import { trpc } from "@/utils/trpc";

import { Text } from "@mantine/core";

const Home: NextPage = () => {
  const hello = trpc.useQuery([
    "example.hello",
    { text: "from v2.starter.nextjs" },
  ]);

  return (
    <>
      <div className='pt-6 text-2xl text-blue-500 flex justify-center items-center w-full'>
        <Text>
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading...</p>}
        </Text>
      </div>
    </>
  );
};

export default Home;
