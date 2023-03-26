import React from "react";
import Button from "./common/Button";
import { motion } from "framer-motion";
import Link from "next/link";

function Hero() {
  return (
    <div className="p-side mt-24 md:mt-28 lg:mt-10">
      <div className="grid grid-cols-1 gap-5 lg:gap-10 xl:grid-cols-2 items-center">
        <div>
          <h1 className="hero-text h-max font-semibold heading-bg">
            Get Smart Technical Talents to{" "}
            <div className="text-center inline relative">
              Accelerate
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    scale: 0.8,
                    opacity: 0,
                  },
                  visible: {
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: 1,
                      duration: 2,
                    },
                  },
                }}
              >
                <img className="fancy-line" src="/assets/line.svg" alt="" />
              </motion.span>
            </div>{" "}
            your Growth
          </h1>
        </div>
        <div className="mt-5 xl:mt-0 xl:max-w-md xl:justify-self-center">
          <p className="md:leading-8 md:text-lg">
            {/* We provide vetted technical talents to support your business with
            Technical Support, API Integrations, Project Development,
            Documentation, Testing and so much more! */}
            We provide startups and fintechs with pre-screened, mid-level
            technical talents that can serve as Technical Support, Entry-level
            developers, or a temporary project team
          </p>
          <div className="flex items-center gap-3 mt-6">
            <Link href="#growth">
              <Button title={"Get Started"} color={true} />
            </Link>
            <Link target={"_blank"} href="https://forms.gle/qXteQ3QmmFsXcEfn7">
              <Button title={"Hire Talents"} color={false} />
            </Link>
          </div>
        </div>
      </div>
      <div className="my-8 md:mt-16 md:mb-20">
        <img
          className="w-full hero-img object-cover"
          src="/assets/hero.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
