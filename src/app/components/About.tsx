import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-24 lg:py-32">
      <div>
        <h1 className="text-[#EE3639] text-xl font-thin uppercase mb-4">
          About us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem]/18 italic font-semibold text-left">
            We set out to build <br />
            <span className="text-gray-500 not-italic ">
              a better way to invest
            </span>
          </h2>

          <p className="text-gray-500">
            We are dedicated to build innovative solutions that enable
            businesses to invest in technology more efficiently. Our aim is to
            make digital transformation accessible, propelling growth and
            maximizing value through intelligent, forward-thinking strategy.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 pt-8">
        <Image
          src={"/assets/about1.png"}
          width={800}
          height={400}
          alt="About us banner image"
          className="rounded-2xl object-cover lg:w-3/5 h-[400px]"
        />
        <Image
          src={"/assets/about2.png"}
          width={800}
          height={400}
          alt="About us banner image"
          className="rounded-2xl object-cover lg:w-2/5 h-[400px]"
        />
      </div>
    </div>
  );
}
