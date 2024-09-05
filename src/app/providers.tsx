"use client";

import * as React from "react";
import type { Session } from "next-auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";

import { config } from "../wagmi";

const queryClient = new QueryClient()

export function Providers({ children }: {children: React.ReactNode;}) {

  return (
    <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
            <RainbowKitProvider
              theme={lightTheme({
                accentColor: "#f471b5",
                accentColorForeground: "#14040c",
                borderRadius: "medium",
              })}
            >
              {children}
            </RainbowKitProvider>
        </QueryClientProvider>
    </WagmiProvider>
  );
}
