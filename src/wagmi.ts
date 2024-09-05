import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { optimism, optimismSepolia } from "wagmi/chains";

export const config = getDefaultConfig({
  appName: "Typpo Rush",
  projectId: "66ea8e233ab5eaeb4026c8d8da37739e",
  chains: [
    optimism,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true" ? [optimismSepolia] : []),
  ],
  ssr: true,
});
