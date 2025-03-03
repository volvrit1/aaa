import Image from "next/image";
import React from "react";

export default function OurExpertise() {
  return (
    <div className="max-w-7xl m-auto p-4 lg:p-24 lg:py-24">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="lg:w-3/5 bg-[#FFE9E9] relative left-[-1rem] p-2 lg:left-[-6rem] lg:pl-24 lg:p-12 rounded-r-2xl">
            <h1 className="text-[#EE3639] text-xl font-thin uppercase mb-4">
              Our Expertise
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]/16 italic font-semibold text-left col-span-2">
              Industries we&apos;ve
              <br />
              <span className="text-gray-500 not-italic ">
                created solutions for
              </span>
            </h2>
            <p className="text-gray-500 text-sm">
              We’ve crafted innovative digital solutions across diverse
              industries, including healthcare, education, retail, technology,
              and more. Our expertise empowers businesses to enhance their
              online presence and achieve measurable success with tailor-made
              strategies
            </p>
          </div>

          <div className="h-[70vh] lg:w-2/5 p-4 grid grid-cols-2 gap-4 gap-y-4 ">
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div className="border rounded-full flex justify-center items-center h-16 w-16">
                <Image
                  src={"/assets/design.png"}
                  width={30}
                  height={30}
                  alt="design"
                  className="text-xl "
                />{" "}
              </div>
              Food Industry
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div className="border rounded-full flex justify-center items-center h-16 w-16">
                <Image
                  src={"/assets/design.png"}
                  width={30}
                  height={30}
                  alt="design"
                  className="text-xl "
                />{" "}
              </div>
              Food Industry
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div className="border rounded-full flex justify-center items-center h-16 w-16">
                <Image
                  src={"/assets/design.png"}
                  width={30}
                  height={30}
                  alt="design"
                  className="text-xl "
                />{" "}
              </div>
              Food Industry
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div className="border rounded-full flex justify-center items-center h-16 w-16">
                <Image
                  src={"/assets/design.png"}
                  width={30}
                  height={30}
                  alt="design"
                  className="text-xl "
                />{" "}
              </div>
              Food Industry
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div className="border rounded-full flex justify-center items-center h-16 w-16">
                <Image
                  src={"/assets/design.png"}
                  width={30}
                  height={30}
                  alt="design"
                  className="text-xl "
                />{" "}
              </div>
              Food Industry
            </div>
            <div className="flex flex-col justify-center items-center gap-2 text-lg">
              <div className="border rounded-full flex justify-center items-center h-16 w-16">
                <Image
                  src={"/assets/design.png"}
                  width={30}
                  height={30}
                  alt="design"
                  className="text-xl "
                />{" "}
              </div>
              Food Industry
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
