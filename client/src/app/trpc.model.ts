import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { JokeRouterType } from "../../../server/routes";

export let client = createTRPCProxyClient<JokeRouterType>({
    links: [
      httpBatchLink({
        url: 'http://localhost:4001/trpc',
      }),
    ],
  });

