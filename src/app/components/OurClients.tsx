"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function OurClients() {
  const clients = [
    { id: 1, name: "Fitness 4 U", logo: "/assets/client1.png" },
    { id: 2, name: "WoodHeaven Interiors", logo: "/assets/client2.png" },
    { id: 3, name: "Unfazed", logo: "/assets/client3.png" },
    { id: 4, name: "Deerghayu", logo: "/assets/client4.png" },
    { id: 5, name: "BooksWagon", logo: "/assets/client5.png" },
    { id: 6, name: "Unifi Cars", logo: "/assets/client6.png" },
    { id: 7, name: "Affinity Salon", logo: "/assets/client7.png" },
    { id: 8, name: "Kingsmen Apparels", logo: "/assets/client8.png" },
    { id: 9, name: "Keintchi Family Salon", logo: "/assets/client9.png" },
    { id: 10, name: "Extra Client 1", logo: "/assets/client10.png" },
    { id: 11, name: "Extra Client 2", logo: "/assets/client11.png" },
    { id: 12, name: "Extra Client 3", logo: "/assets/client12.png" },
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     // setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
  //   }, 3000); // Auto-scroll every 3 seconds

  //   return () => clearInterval(interval);
  // }, [clients.length]);

  return (
    <div className="max-w-7xl m-auto p-4 lg:p-24 lg:py-24">
      <div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-5">
          <div className="text-right lg:w-4/5">
            <h1 className="text-[#EE3639] text-right text-xl font-thin uppercase mb-4">
              Our Clinets
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem]/18 italic font-semibold text-right col-span-2">
              A few companies who trusted
              <br />
              <span className="text-gray-500 not-italic ">
                us with their projects
              </span>
            </h2>
          </div>

          <div className="p-4 gap-28 flex flex-col  justify-center items-start lg:w-2/5">
            <p className="text-gray-500 text-sm">
              Our clients on us for our considered, strategic methodology with
              each project. From initial planning through to ultimate delivery,
              we guarantee hassle-free solutions that suit their business goals
              and vision
            </p>
          </div>
        </div>

        <div>
          <div className="relative overflow-hidden py-8">
            <div className="relative flex overflow-hidden max-w-screen-xl mx-auto">
              <motion.div
                className="flex space-x-6"
                initial={{ x: "-50%" }}
                animate={{ x: "0%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 35,
                }}
              >
                {/* Map clients to show in pairs */}
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-40 p-4 rounded-full  border border-gray-400"
                  >
                    <Image
                      src={client.logo}
                      width={150}
                      height={20}
                      alt={`Client ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="relative overflow-hidden py-8">
            <div className="relative flex overflow-hidden max-w-screen-lg mx-auto">
              <motion.div
                className="flex space-x-6"
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  repeat: Infinity,
                  ease: "linear",
                  duration: 45,
                }}
              >
                {/* Map clients to show in pairs */}
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-40 h-40 p-2 rounded-full  border border-gray-400"
                  >
                    <Image
                      src={client.logo}
                      width={150}
                      height={20}
                      alt={`Client ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
