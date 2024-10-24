import { useLocation } from "react-router-dom";  // Hook to get the current route path
import { disablePageScroll, enablePageScroll } from "scroll-lock";  // Functions to enable/disable page scrolling

import { brainwave } from "../assets";  // Importing the brainwave logo asset
import { navigation } from "../constants";  // Importing navigation links data
import Button from "./Button";  // Importing Button component
import MenuSvg from "../assets/svg/MenuSvg";  // Importing SVG for the menu icon
import { HamburgerMenu } from "./design/Header";  // Importing HamburgerMenu component for mobile view
import { useState } from "react";  // React hook to manage state

const Header = () => {
  const pathname = useLocation();  // Get the current path location (used for active links)
  const [openNavigation, setOpenNavigation] = useState(false);  // State to track if navigation is open

  // Function to toggle the navigation menu
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);  // Close navigation
      enablePageScroll();  // Re-enable scrolling
    } else {
      setOpenNavigation(true);  // Open navigation
      disablePageScroll();  // Disable page scrolling when the menu is open
    }
  };

  // Close navigation when a link is clicked
  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();  // Re-enable scrolling
    setOpenNavigation(false);  // Close the menu
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}  // Changes background based on whether the menu is open
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo link to the top of the page */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <img src={brainwave} width={190} height={40} alt="Brainwave" />
        </a>

        {/* Navigation menu */}
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Map through navigation items */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}  // Close navigation on link click
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""  // Hide certain items on larger screens
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathname.hash  // Active link styling
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Hamburger menu component */}
          <HamburgerMenu />
        </nav>

        {/* 'New Account' button visible on larger screens */}
        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a>

        {/* 'Sign In' button visible on larger screens */}
        <Button className="hidden lg:flex" href="#login">
          Sign in
        </Button>

        {/* Mobile view button to toggle navigation */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
