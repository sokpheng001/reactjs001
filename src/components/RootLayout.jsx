import React, { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import { Outlet } from "react-router";
import FooterComponent from "./FooterComponent";
import NavbarWithUserAccountComponent from "./NavbarWithUserAccount";
import { useGetVerifiedMutation } from "../redux/services/authSlice";
import toast, { Toaster } from "react-hot-toast";

export default function RootLayout() {
  const [dataOfUser, setUserData] = useState();
  const [getVerified, { isLoading: myLoading, error: myError }] =
    useGetVerifiedMutation();
  useEffect(() => {
    const accessTokenFromLocalStorage = localStorage.getItem("accessToken");
    async function verify() {
      const userData = await getVerified(accessTokenFromLocalStorage).unwrap();
      setUserData(userData);
      // console.log(userData?.payload?.user_name)
    }
    verify();
    
  }, []);
  const notify = () =>
    toast.success("Login successfully", {
      icon: "😂",
      duration:5000
    });
  if (dataOfUser) {
    notify()
    return (
      <main>
        {/* <NavbarComponent /> */}
        <NavbarWithUserAccountComponent
          name={dataOfUser?.payload?.user_name}
          profile={dataOfUser?.payload?.profile}
        />
        <section>
          <Outlet />
          <Toaster />
        </section>
      </main>
    );
  }
  return (
    <main>
      <NavbarComponent />
      <section>
        <Outlet />
      </section>
    </main>
  );
}
