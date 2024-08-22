import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => (
  <>
    <NavBar />
    <main className="container py-4">
      <Outlet />
    </main>
  </>
);

export default RootLayout;
