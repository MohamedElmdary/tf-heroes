import { Link, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Hero from "./views/Hero";
import HeroesList from "./views/HeroesList";

const routes = [
  { path: "/", label: "Dashboard" },
  { path: "/heroes", label: "Heroes" },
];

export default function () {
  const location = useLocation();

  const routesCmp = routes.map((route) => {
    return (
      <li key={route.path}>
        <Link
          to={route.path}
          className={location.pathname === route.path ? "active" : undefined}
        >
          {route.label}
        </Link>
      </li>
    );
  });

  return (
    <main id="app-container">
      <h1>Tour of Heroes</h1>
      <ul id="navbar">{routesCmp}</ul>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/heroes" element={<HeroesList />} />
        <Route path="/hero/:id" element={<Hero />} />
      </Routes>
    </main>
  );
}
