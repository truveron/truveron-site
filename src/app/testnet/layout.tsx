// src/app/testnet/layout.tsx
'use client';

import '../globals.css';
import '@rainbow-me/rainbowkit/styles.css';

import { WagmiProvider, createConfig } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'Truveron App',
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID', // 🔁 Replace with your real WalletConnect ID
  chains: [mainnet, sepolia],
  ssr: true,
});

const queryClient = new QueryClient();

export default function TestnetLayout({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider chains={config.chains}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
