import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  const navLinks = [
    { name: "Web Development", url: "/" },
    { name: "App Development", url: "/" },
    { name: "SAAS Development", url: "/" },
    { name: "AI Integration", url: "/" },
  ];



  return (
    <footer className="text-gray-50 bg-gray-900 py-10 px-4 w">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6  mx-auto">
          <div className="w-full">
            <div className="mb-4">
              <Image
                src="/assets/logo/logo.png"
                width={200}
                height={120}
                alt="Sky Field"
                className="w-70 h-30"
              />
            </div>
            <div>
              <p className="text-sm text-gray-300 mb-2">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
                posuere vel venenatis eu sit massa volutpat.
              </p>
              {/* <p className="text-xs text-gray-300 mb-2">
                <strong>Address</strong>: 123 Main St, Anytown, USA 12345
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Phone</strong>: 555-555-5555
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Email</strong>: info@company.com
              </p> */}
            </div>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Services</h3>
            <ul className="text-sm text-gray-50 space-y-2">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text-gray-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Company</h3>
            <ul className="text-sm text-gray-50 space-y-2">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text-gray-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Support</h3>
            <ul className="text-sm text-gray-50 space-y-2">
              {navLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.url} className="hover:text-gray-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-2 font-semibold">Contact Us</h3>
            <div>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Email</strong>: allabove@company.com
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Phone</strong>: 555-555-5555
              </p>
              <p className="text-xs text-gray-300 mb-2">
                <strong>Address</strong>: U19/10 Gladstone Rd, castle Hill
                NSW 2154
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
