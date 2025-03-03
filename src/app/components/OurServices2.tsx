import Image from "next/image";
import React from "react";

export default function OurServices2() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-24 lg:py-24">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h1 className="text-[#EE3639] text-xl font-thin uppercase mb-4">
              Our Services
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]/18 italic font-semibold text-left col-span-2">
              A Thoughtful Process:
              <br />
              <span className="text-gray-500 not-italic ">
                Strategic from Start to Finish
              </span>
            </h2>
          </div>

          <div className="h-[70vh] p-4 gap-28 flex flex-col  justify-center items-start">
            <div className="relative flex justify-start items-start gap-2 text-lg">
              <Image
                src={"/assets/design.png"}
                width={30}
                height={30}
                alt="design"
                className="ml-2 text-xl "
              />{" "}
              Design
              <span className="absolute w-[75px] rotate-90 left-[-0.75rem] bottom-[-3.5rem] border-b-[1.34px] border-gray-600 "></span>
            </div>
            <div className="relative flex justify-start items-start gap-2 text-lg">
              <Image
                src={"/assets/dev.png"}
                width={30}
                height={30}
                alt="design"
                className="ml-2 text-xl "
              />{" "}
              Development
              <span className="absolute w-[70px] rotate-90 left-[-0.75rem] bottom-[-3.5rem] border-b-[1.34px] border-gray-600 "></span>
            </div>{" "}
            <div className="relative flex justify-start items-start gap-2 text-lg">
              <Image
                src={"/assets/branding.png"}
                width={30}
                height={30}
                alt="design"
                className="ml-2 text-xl "
              />{" "}
              Branding
              {/* <span className="absolute w-[70px] rotate-90 left-[-0.75rem] bottom-[-3.5rem] border-b-[1.34px] border-gray-600 "></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
