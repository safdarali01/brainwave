import React from "react";
import Section from "./Section";  // Importing the Section component
import { socials } from "../constants";  // Importing social media links from constants

// Footer component definition
const Footer = () => {
  return (
    // Section component with custom padding and crosses background
    <Section crosses className="!px-0 !py-10">
      
      {/* Footer container with flexbox layout */}
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        
        {/* Copyright notice */}
        <p className="caption text-n-4 lg:block">
          Copyright © {new Date().getFullYear()} Brainwave - All rights reserved
          - Powered By{" "}
          <a
            href="https://www.linkedin.com/in/muhammad-safdar-ali26/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-n-4 font-bold hover:text-n-3 transition-colors"
          >
            Safdar Ali{/* Safdar Ali link with hover effect */}
          </a>
        </p>

        {/* Social media icons list */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}  // Unique key for each social icon
              href={item.url}  // Social media URL
              target="_blank"  // Opens the link in a new tab
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              {/* Social media icon */}
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
