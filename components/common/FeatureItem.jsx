import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function FeatureItem({ heading, main, close, image, reverse, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
    ref={ref}
      className={`${
        reverse ? "md:flex-row-reverse" : ""
      } flex flex-wrap md:flex-nowrap md:gap-10 items-center max-w-5xl mx-auto mt-10`}
    >
      {isInView && reverse ? (
        <motion.div
          ref={ref}
          animate={{ x: [80, 0], opacity: [0, 0.5, 1] }}
          transition={{
            duration: 1,
            ease: "easeIn",
            // delay: index,
          }}
          className="w-full md:w-full"
        >
          <h1
            className={`${
              reverse ? "heading-bg" : "red-text"
            } h-md font-semibold mb-5`}
          >
            {heading}
          </h1>
          <p className="mb-4 leading-loose">{main}</p>
          <p className="leading-loose">{close}</p>
        </motion.div>
      ) : isInView && !reverse ? (
        <motion.div
          animate={{ x: [-80, 0], opacity: [0, 0.5, 1]}}
          transition={{
            duration: 1,
            ease: "easeIn",
            // delay: index,
          }}
          className="w-full md:w-full"
        >
          <h1
            className={`${
              reverse ? "heading-bg" : "red-text"
            } h-md font-semibold mb-5`}
          >
            {heading}
          </h1>
          <p className="mb-4 leading-loose">{main}</p>
          <p className="leading-loose">{close}</p>
        </motion.div>
      ) : null }
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeIn",
          // delay: index,
        }}
        className="justify-self-center w-full md:w-full "
      >
        <img
          className={`${reverse ? "" : "ml-auto mr-5"}`}
          src={image}
          alt=""
        />
      </motion.div>
    </div>
  );
}

export default FeatureItem;
