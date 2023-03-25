import React from "react";
import Button from "./common/Button";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div id="process">
      <div className="p-side light-bg">
        <div className="py-8 md:py-14">
          <h1 className="font-semibold text-center heading-bg h-lg max-w-4xl mx-auto tracking-wide mt-5 mb-10">
            How it works
          </h1>
          <div ref={ref} className="flex flex-col lg:flex-row lg:grid lg:grid-cols-5 items-start justify-center gap-5 max-w-5xl mx-auto mt-10 mb-5">
            <motion.div
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
              className="text-center w-full"
            >
              <p className="flex items-center justify-center p-3 border-2 border-bg w-10 h-10 rounded-full mx-auto">
                1
              </p>
              <h1 className="heading-bg text-lg my-3 font-semibold">Request</h1>
              <p>Fill our talent request form and let’s know what you need.</p>
            </motion.div>
            <motion.img
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
              }}
              className="hidden lg:block mt-5"
              src="/assets/arrow.svg"
              alt=""
            />
            <motion.div
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
              }} className="text-center w-full">
              <p className="flex items-center justify-center p-3 border-2 border-bg w-10 h-10 rounded-full mx-auto">
                2
              </p>
              <h1 className="heading-bg text-lg my-3 font-semibold">
                Get Talents
              </h1>
              <p>
                We’ll match your needs with pre-screened talents in our network.
              </p>
            </motion.div>
            <motion.img
              style={{
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
              }}
              className="hidden lg:block mt-5"
              src="/assets/arrow.svg"
              alt=""
            />
            <motion.div
              style={{
                transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
              }} className="text-center w-full">
              <p className="flex items-center justify-center p-3 border-2 border-bg w-10 h-10 rounded-full mx-auto">
                3
              </p>
              <h1 className="heading-bg text-lg my-3 font-semibold">Onboard</h1>
              <p>
                After agreements and payments, the talents are set up on your
                systems to hit the ground running.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-side">
        <div className="py-8 md:py-20 grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
          <div className="flex md:block flex-col items-center py-5 md:border-r-2 border-gray-500 md:pl-8">
            <h1 className="text-xl md:text-3xl heading-bg font-semibold mb-3 md:mb-5">
              Are you a developer?
            </h1>
            <p className="text-center md:text-left mb-5 max-w-sm">
              Apply to join our talent pipeline and get connected to
              opportunities.
            </p>
            <Link target={"_blank"} href="https://forms.gle/FGH18mkpUR1EX3UJ9">
              <Button title={"Apply Here"} color={true} />
            </Link>
          </div>
          <div className="flex md:block flex-col items-center py-5 md:pl-16">
            <h1 className="text-xl md:text-3xl heading-bg font-semibold mb-3 md:mb-5">
              Do you train Devs?
            </h1>
            <p className="text-center md:text-left mb-5 max-w-sm">
              Let’s partner with you to place your people in attractive jobs
            </p>
            <Link target={"_blank"} href="https://forms.gle/ojXsfCLrJea5gzQc8">
              <Button title={"Let's talk"} color={true} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Process;
