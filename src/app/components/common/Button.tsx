import React from "react";
import Link from "next/link"; // Assuming you're using Next.js. Adjust if using a different routing library.
import { BsArrowUpRightCircle } from "react-icons/bs";

const Button = ({
  text = "Contact Us", // Default text if no prop is provided
  href = "/contact-us", // Default link if no prop is provided
}: any) => {
  return (
    <Link
      href={href}
      className={`text-white w-40 bg-[#242424] p-3 px-4 border-2 rounded-full font-[inter] flex justify-center items-center`}
    >
      {text} <BsArrowUpRightCircle className="ml-2 text-xl " />
    </Link>
  );
};

export default Button;
