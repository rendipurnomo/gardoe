import { NavLink } from "react-router-dom";
import { House, Calculator } from "@phosphor-icons/react";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-primary h-16">
      <div className="flex [&_.active]:text-primary-foreground">
        <NavLink name="Home" to="/" className="p-5 flex-1 flex justify-center">
          <House size={24} weight="fill" />
        </NavLink>
        <NavLink
          name="Calculator"
          to="/calculator"
          className="p-5 flex-1 flex justify-center"
        >
          <Calculator size={24} weight="fill" />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
