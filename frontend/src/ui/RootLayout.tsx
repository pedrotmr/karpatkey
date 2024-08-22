import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const RootLayout = () => (
  <>
    <NavBar />
    <main className="container py-6">
      <Outlet />
    </main>
  </>
);

export default RootLayout;
