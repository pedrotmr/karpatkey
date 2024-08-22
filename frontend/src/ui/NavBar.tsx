import { NavLink } from "react-router-dom";
import { routes } from "../App";

const NavBar = () => {
  return (
    <header className="gap-12 shadow-md">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/">
          <img
            src="https://cdn.prod.website-files.com/639c46f0e63ad8a736f14b89/639c67fde63ad873e8f34fe0_karpatkey.png"
            alt="Karpatkey"
            loading="lazy"
            width={102}
          />
        </NavLink>
        <nav className="hidden items-center gap-2 md:flex">
          {routes.map((route) => (
            <NavLink
              key={route.to}
              to={route.to}
              className={({ isActive }) =>
                `text-md rounded-md px-4 py-2 font-semibold duration-300 hover:bg-light-grey ${isActive ? "bg-light-grey" : ""}`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
