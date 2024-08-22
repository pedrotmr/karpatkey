import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Assets from "./pages/Assets";
import Clients from "./pages/Clients";
import Dashboard from "./pages/Dashboard";
import Performance from "./pages/Performance";
import Positions from "./pages/Positions";
import Transactions from "./pages/Transactions";
import RootLayout from "./ui/RootLayout";

export const routes = [
  { to: "/dashboard", label: "Dashboard", component: <Dashboard /> },
  { to: "/assets", label: "Assets", component: <Assets /> },
  { to: "/posistions", label: "Positions", component: <Positions /> },
  { to: "/performance", label: "Performance", component: <Performance /> },
  { to: "/clients", label: "Clients", component: <Clients /> },
  { to: "/transactions", label: "Transactions", component: <Transactions /> },
];

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        {routes.map((route) => (
          <Route key={route.to} path={route.to} element={route.component} />
        ))}
        <Route path="/" element={<Navigate to="/assets" />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
