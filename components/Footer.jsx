import Link from "next/link";
import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <div id="footer" className="p-side bg-black">
      <div className="py-14 text-white">
        <h1 className="font-semibold text-center h-lg max-w-4xl mx-auto tracking-wide mt-5">
          Contact Us
        </h1>
        <p className="text-center max-w-xl mx-auto mt-5 text-white">
          Have any question or feedback, feel free to reach out to us. We are
          always available to help.
        </p>

        <div className="max-w-sm mt-10 grid grid-cols-2 mx-auto">
          <Link href="tel:8064006070">
            <div className="flex flex-col items-center cursor-pointer">
              <i className="fa-solid fa-phone text-white text-3xl mb-3"></i>
              <p className="text-white">+2348064006070</p>
            </div>
          </Link>
          <Link href="mailto:info@alvative.com">
            <div className="flex flex-col items-center cursor-pointer">
              <i className="fa-solid fa-envelope text-white text-3xl mb-3"></i>
              <p className="text-white">info@alvative.com</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center gap-6 pb-16">
        {/* <Link href=""><img src="/assets/fb.svg" alt="" /></Link> */}
        <Link
          target={"_blank"}
          href="https://twitter.com/alvativehq"
          className="cursor-pointer"
        >
          <motion.img
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeIn",
              // delay: index,
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.5 },
            }}
            src="/assets/twitter.svg"
            alt=""
          />
        </Link>
        <Link
          target={"_blank"}
          href="https://instagram.com/alvativehq"
          className="cursor-pointer"
        >
          <motion.img
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeIn",
              delay: 0.5,
            }}
            whileHover={{
              y: 0,
              transition: { duration: 0.5 },
            }}
            src="/assets/instagram.svg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
