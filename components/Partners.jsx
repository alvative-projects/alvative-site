import React from "react";
import { partners } from "../data/partners";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className="light-bg py-10 md:py-20">
      <div className="p-side">
        <h1 className="text-center h-lg mb-8 md:mb-14 font-semibold heading-bg">
          Proudly trusted by
        </h1>
        <div
          ref={ref}
          className="grid grid-cols-2 md:flex md:flex-wrap gap-5 md:gap-10 items-center justify-center max-w-5xl mx-auto"
        >
          {partners.map((item, index) => (
            <motion.img
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                transitionDelay: index === 0 ? 0 : index + "s",
              }}
              key={index}
              className="justify-self-center partner-img"
              src={item.url}
              alt={item.name}
            ></motion.img>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
