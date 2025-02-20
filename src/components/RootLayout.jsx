import React from "react";
import NavbarComponent from "./NavbarComponent";
import { Outlet } from "react-router";
import FooterComponent from "./FooterComponent";

export default function RootLayout() {
  return (
    <main>
      <NavbarComponent />

      <section>
        <Outlet />
      </section>
      <FooterComponent/>
    </main>
  );
}
