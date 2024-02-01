import React from "react";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <header className="flex justify-around items-center py-5">
      <img src={Logo} alt="Logo" />
      <nav>
        <ul className="flex gap-8">
          <li>
            <select>
              <option value="about">About</option>
            </select>
          </li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>Login</li>
          <li>
            <button className="rounded-full border border-darkViolet px-5 py-1 text-darkViolet font-medium hover:text-[#fff] hover:bg-darkViolet">
              Start Free Trail
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
