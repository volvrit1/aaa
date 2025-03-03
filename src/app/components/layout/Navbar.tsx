"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Button from "../common/Button";

const Navbar = () => {
  const pathname = usePathname(); // Get current route

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact-us" },
  ];

  return (
    <nav className="bg-[#242424] rounded-full flex justify-between px-10 lg:px-0 lg:justify-evenly items-center h-20 absolute left-1/2 top-5 transform -translate-x-1/2 z-[1000] w-10/12 m-auto">
      <div>
        <Link href={"/"}>
          <Image
            src={"/assets/logo/logo.png"}
            width={150}
            height={70}
            alt="sky field"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex justify-center items-center w-3/5 text-gray-50">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="border-none outline-none"
          >
            <li
              className={`mr-10 text-sm font-['inter'] ${
                pathname === item.path
                  ? "border-b-4 border-[#ffa6a6] font[inter] text-gray-50 font-thin"
                  : "text-gray-50 hover:text-gray-100 transition duration-200"
              }`}
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div>
        {/* <MobileMenu /> */}

        <Button
          text="Get Started"
          href="/"
          fromColor="#EE3639"
          toColor="#EE3639"
          hoverFromColor="hover:from-green-500"
          hoverToColor="hover:to-teal-600"
          activeFromColor="active:from-green-600"
          activeToColor="active:to-teal-700"
          className="mt-4"
        />
      </div>
    </nav>
  );
};

export default Navbar;
