import { NavLink } from "react-router-dom";
import { House, Calculator, Wrench } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-green-600 text-white h-16">
      <div className="flex [&_.active]:text-green-900">
        <NavLink to="/" className="p-5 flex-1 flex justify-center">
          <House size={24} weight="fill" />
        </NavLink>
        <NavLink to="/calculator" className="p-5 flex-1 flex justify-center">
          <Calculator size={24} weight="fill" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
