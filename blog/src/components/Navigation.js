import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle function to change the state

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="site-header bg-[#805aed]">
        <div className="container mx-auto p-4">
          <div className="header flex items-center justify-between">
            <div className="flex gap-5 items-center">
              <div className="logo">
                <Link to="/" className="text-2xl font-medium text-white">
                  UiFlow
                </Link>
              </div>
              <div className={`nav ${isOpen ? "block" : "hidden"} md:flex`}>
                <ul className="flex flex-col md:flex-row gap-5 pt-1 md:pt-0">
                  <li>
                    <Link
                      to="/technology"
                      className="text-white font-medium uppercase"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/gadgets"
                      className="text-white font-medium uppercase"
                    >
                      Gadgets
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/software"
                      className="text-white font-medium uppercase"
                    >
                      Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/games"
                      className="text-white font-medium uppercase"
                    >
                      Games
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/podcasts"
                      className="text-white font-medium uppercase"
                    >
                      Podcasts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="toggle-btn pt-1 md:hidden">
              <i
                className={`fa fa-bars text-2xl cursor-pointer text-white ${
                  isOpen ? "fa-times" : "fa-bars"
                }`}
                onClick={toggleMenu}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
