'use client';
import WalletContextProvider from "../contexts/WalletContextProvider";
import TransitionContextProvider from "../contexts/TransitionContextProvider";
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <WalletContextProvider>
      <Navbar />
      <TransitionContextProvider>
        {children}
      </TransitionContextProvider>
      <ToastContainer />
    </WalletContextProvider>
  );
}