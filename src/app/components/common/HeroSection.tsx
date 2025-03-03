import Image from "next/image";
import React from "react";
import Button from "./Button";

const HeroSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
  link?: any;
  image?: string;
}) => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen 2xl:h-[70vh] overflow-hidden bg-cover bg-center bg-[url('/assets/bg/bannerHome.png')]">
      <div className="absolute inset-0 bg-black/5"></div>

      <div className=" mt-32  md:absolute left-20 top-36 flex flex-col justify-center items-start text-grey-800 px-6 lg:w-3/5 m-auto p-4 mb-10">
        <h2 className="text-2xl  md:text-4xl lg:4xl xl:5xl font-thin mr-auto mb-2">
          {"WE CREATE"}
        </h2>{" "}
        <h1 className="text-2xl md:text-[5rem]  font-thin italic flex justify-start items-center gap-6">
          <Image
            src={"/assets/bg/bannericon.png"}
            width={70}
            height={70}
            alt=""
            className="bg-gray-800 rounded-full p-4"
          />{" "}
          {title || "AWESOME"}
        </h1>
        <h1 className="text-2xl text-left text-[#EE3639] md:text-[7rem] font-bold">
          {"DESIGN!"}
        </h1>
        <p className="text-base text-gray-500 font-thin  text-left line-clamp-4 md:line-clamp-none max-w-2xl left-6 mb-10 w-4/6">
          {description}
        </p>
        <div className="flex justify-between items-center">
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
      </div>
    </div>
  );
};

export default HeroSection;
