// Navbar.js
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiBars3CenterLeft, HiMiniHome } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowRightLong, FaUser } from "react-icons/fa6";

const Navbar = ({ toggleSideBar, setToggleSideBar }) => {
  const [activeLink, setActiveLink] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navLinks = [
    { linkTitle: "projects", link: "/projects" },
    { linkTitle: "about me", link: "/about_me" },
    { linkTitle: "skills", link: "/skills" },
    { linkTitle: "contacts", link: "/contacts" },
  ];

  const tSideBar = () => setToggleSideBar(!toggleSideBar);

  return (
    <header>
      <nav className="relative bg-[#1d2430] text-white font-semibold flex items-center justify-between px-8 top-0 z-50">
        <button
          className="flex md:hidden items-center gap-4 cursor-pointer"
          onClick={tSideBar}
          aria-label="Toggle Sidebar"
        >
          {toggleSideBar ? (
            <HiBars3CenterLeft className="text-4xl text-red-400" />
          ) : (
            <RxHamburgerMenu className="text-3xl" />
          )}
        </button>

        {toggleSideBar && (
          <div className="md:hidden absolute top-16 left-0 p-5 pt-1 pr-8 bg-[#1D2430] rounded-br-2xl shadow-2xl border-gray-500 border-l-0 border-t-0 border-2">
            <div className="flex flex-col items-start">
              <Link to="/" className="py-3 pl-4 flex items-center gap-3" onClick={tSideBar}>
                <HiMiniHome className="text-xl" />
                Home
              </Link>

              {navLinks.map(({ linkTitle, link }, index) => (
                <Link key={index} to={link} className="capitalize py-3 pl-4" onClick={tSideBar}>
                  {linkTitle}
                </Link>
              ))}

              <Link to="/all_projects" className="capitalize py-3 pl-4" onClick={tSideBar}>
                All Projects
              </Link>

              <Link to="/about_me" className="capitalize py-3 pl-4 flex items-center gap-3" onClick={tSideBar}>
                <FaUser className="text-lg" />
                About Me
              </Link>
            </div>
          </div>
        )}

        <div className="hidden md:flex gap-6">
          <Link to="/" className={`py-5 ${activeLink === "/" ? "underline decoration-yellow-400" : ""}`}>
            Home
          </Link>
          {navLinks.map(({ linkTitle, link }, index) => (
            <Link key={index} to={link} className="py-5 text-gray-400">
              {linkTitle}
            </Link>
          ))}
        </div>

        <Link to="/hire_me" className="flex items-center gap-3 py-5">
          Hire Me <FaArrowRightLong className="rotate-180 text-2xl" />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
