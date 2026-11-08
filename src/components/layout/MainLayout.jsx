import { Outlet } from "react-router";
import { Header } from "./Header";

export function MainLayout() {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
