import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-around p-5 bg-[#24292e] text-2xl text-white sticky top-0">
      <div>Inventory</div>
      <div className="gap-5 flex">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/service">Service</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <div className="flex gap-5">
        <Button>Login</Button>
        <Button>Sign Up</Button>
        <NavLink to="/viewcart">
          <Button>View Cart</Button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
