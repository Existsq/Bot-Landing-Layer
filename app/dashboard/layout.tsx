import React from "react";
import Header from "@/components//dashboard//header/Header";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Header currentPage="profile" />
      <nav></nav>
      {children}
    </section>
  );
}
