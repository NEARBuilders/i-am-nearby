"use client";
import "@near-wallet-selector/modal-ui/styles.css";
import "./globals.css";

import { Navigation } from "@/components/navigation";
import { NetworkId } from "@/config";
import { useInitWallet } from "@/wallets/wallet-selector";

export default function RootLayout({ children }) {
  useInitWallet({ createAccessKeyFor: "", networkId: NetworkId });
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
