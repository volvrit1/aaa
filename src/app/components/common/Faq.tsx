"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsDashCircle } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <div className="container mx-auto px-6 lg:p-16 space-y-4 ">
      <div>
        <h1 className="text-[#EE3639] text-xl font-thin uppercase mb-4">
          Our Services
        </h1>
        <div className="flex justify-between items-center gap-5">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]/18 italic font-semibold text-left col-span-2">
            We're Here to Help
            <br />
            <span className="text-gray-500 not-italic ">Common Questions</span>
          </h2>

          <Image
            alt=""
            width={50}
            height={50}
            src="/assets/like.png"
            className=""
          />
        </div>
      </div>
      {[
        {
          question:
            "What particular AR/VR services have you implemented with All Above Agency?",
          answer:
            "Our team at All Above Agency has successfully implemented various innovative AR/VR services like 3D modelling, virtual tours, training modules, and interactive experiences for clients across various industries. Our engineers have collaborated closely with clients to bring their visions into reality, delivering world-class technology solutions according to their requirements",
        },
        {
          question: "How did All Above Agency enhance your AR/VR capabilities?",
          answer:
            " All Above Agency has also enhanced your AR/VR solutions by providing creative and scalable solutions. Their capability of developing customized AR experiences and VR simulations helped us simplify our processes and provide immensely interactive content to our clients, enhancing overall user interaction and experience.",
        },
        {
          question:
            "Which industries have our AR/VR solutions with All Above Agency impacted?",
          answer:
            "We have offered AR/VR solutions across various sectors such as real estate, healthcare, education, entertainment, and retail. With the assistance of All Above Agency, we were able to develop virtual property tours, interactive medical training modules, virtual classrooms, and interactive retailing experiences, to mention a few, with all of them being an unmitigated success",
        },
        {
          question:
            "How does All Above Agency's technology enable customization in AR/VR projects?",
          answer:
            "All Above Agency technology is highly versatile and supports tailor-made solutions for specific business needs. Through customer feedback and understanding their vision, All Above Agency helped us create tailored AR/VR experiences, from bespoke virtual worlds to interactive elements that are precise specifications, to enhance user engagement",
        },
        {
          question:
            "How does All Above Agency's technology enable customization in AR/VR projects?",
          answer:
            "AR/VR service integration via All Above Agency has seen higher customer engagement, retention rates, and better user experiences. For instance, our virtual showroom has witnessed 30% more engagement of visitors, whereas VR training modules have cut down onboarding by 25%. Such statistics reflect the success of solutions via All Above Agency",
        },
      ].map((faq, index) => (
        <div key={index} className="border-b border-gray-500 py-6">
          <button
            className={`w-full text-left  flex justify-between items-center`}
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-medium">{faq.question}</span>
            <span className="text-xl">
              {openIndex === index ? (
                <BsDashCircle width={16} height={16} />
              ) : (
                <IoIosAddCircleOutline width={16} height={16} />
              )}
            </span>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden text-gray-500 ${
              openIndex === index
                ? "max-h-40 p-4 bg-transparent "
                : "max-h-0 p-0"
            }`}
          >
            {openIndex === index && <p className="text-sm">{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
