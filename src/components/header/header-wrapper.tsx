"use client";

import dynamic from "next/dynamic";

// Dynamically import the real header with no SSR
const Header = dynamic(() => import("./header"), { ssr: false });

export default function HeaderWrapper() {
  return <Header />;
}
