'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import { createContext } from "react";
import Store from "@/store/store";

const inter = Inter({ subsets: ["latin"] });

interface IStore {
  store: Store
}

const store = new Store()

export const Context = createContext<IStore>({
  store,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Context.Provider value={{store}}>
      <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
    </Context.Provider>
  );
}
