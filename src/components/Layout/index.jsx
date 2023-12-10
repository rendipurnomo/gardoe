import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Header from "../header";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="mx-4">
        <Outlet />
      </main>
      <Navbar />
    </div>
  );
};

export default Layout;
