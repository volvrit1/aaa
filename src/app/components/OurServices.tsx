import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowUpRight, BsArrowUpRightCircle } from "react-icons/bs";

export default function OurServices() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-24 lg:py-32 bg-[#F0EFE9]">
      <div>
        <h1 className="text-[#EE3639] text-xl font-thin uppercase mb-4">
          Our Services
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]/18 italic font-semibold text-left col-span-2">
            Boost your BUSINESS with
            <br />
            <span className="text-gray-500 not-italic ">
              excellent effective services
            </span>
          </h2>

          <Link
            href={""}
            className="rounded-full border-2 h-40 w-40 p-4 flex justify-center items-center"
          >
            Explore All
            <BsArrowUpRightCircle className="ml-2 text-xl " />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <div
            key={index}
            className="p-6 py-10 text-center  flex flex-col justify-center items-center gap-y-2 shadow rounded-full h-[380px] bg-white"
          >
            <Image
              src={"/assets/service1.png"}
              width={800}
              height={400}
              alt="About us banner image"
              className=" object-cover w-10 h-10 mb-2"
            />
            <div className="mb-8">
              <h2 className="text-[#EE3639] text-base font-semibold px-10 mb-6">
                WEB DEVELOPMENT
              </h2>
              <p className="font-normal">
                Custom websites for your business needs
              </p>
            </div>
            <Link href={""} className=" p-4">
              <BsArrowUpRight className="text-4xl" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
