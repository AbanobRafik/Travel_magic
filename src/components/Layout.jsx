import { Outlet } from "react-router";
import Navbar from "./NavBar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="pt-12">
        <Outlet />
      </main>
    </div>
  );
}
