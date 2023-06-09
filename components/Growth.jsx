import React from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

function Growth() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="growth" className="p-side growth-bg mt-5 md:mt-20">
      <div className="py-10 md:py-24">
        <div className="text-center">
          <h1 className="font-semibold text-center h-lg max-w-4xl mx-auto tracking-wide my-5">
            Growth is Tough, Let’s Make it Easier
          </h1>
          <p className="text-center max-w-xl mx-auto text-white">
            From integration support to talent recruitment. We take the brakes
            off to help your company grow, and serve your customers better
          </p>
        </div>
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 xl:gap-10 max-w-6xl mx-auto mt-8 md:mt-14"
        >
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(20px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
            }}
            className="bg-white text-gray-700 rounded-xl px-5 xl:px-10 py-8 md:py-14"
          >
            <h1 className="font-bold growth-header text-xl">
              Hire or Contract Talents
            </h1>
            <p className="mt-3 leading-loose">
              We assign you smart, pre-screened junior talents according to your
              business needs, whom we are also grooming and upskilling into
              intermediates.
            </p>
            <Link target={"_blank"} href="https://forms.gle/qXteQ3QmmFsXcEfn7">
              <p className="heading-bg mt-4 cursor-pointer">
                Request Talent <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </Link>
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(30px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)",
              transitionDelay: "0.8s",
            }}
            className="bg-white text-gray-700 rounded-xl px-5 xl:px-10 py-8 md:py-14"
          >
            <h1 className="font-bold growth-header text-xl">
              Outsource Projects
            </h1>
            <p className="mt-3 leading-loose">
              We provide a team of dedicated developers that can help you to
              build your projects which enables your team to keep being
              efficient at what they do.
            </p>
            <Link target={"_blank"} href="https://forms.gle/ePGgJ6HR3KGoX4eN7">
              <p className="heading-bg mt-4 cursor-pointer">
                Get started now <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </Link>
          </motion.div>
          <motion.div
            style={{
              transform: isInView ? "none" : "translateY(40px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              transitionDelay: "1.5s",
            }}
            className="bg-white text-gray-700 rounded-xl px-5 xl:px-10 py-8 md:py-14"
          >
            <h1 className="font-bold growth-header text-xl">
              Talent Partnership
            </h1>
            <p className="mt-3 leading-loose">
              If you run a developer community, you can join our Talent Pipeline
              Program where your community fellows join our Talent Pipeline and
              have access to our client offers.
            </p>
            <Link target={"_blank"} href="https://forms.gle/ojXsfCLrJea5gzQc8">
              <p className="heading-bg mt-4 cursor-pointer">
                Contact us <i className="fa-solid fa-arrow-right ml-1"></i>
              </p>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Growth;
