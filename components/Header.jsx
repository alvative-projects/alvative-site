import React, { useState } from "react";
import Button from "./common/Button";
import Link from "next/link";

function Header() {
  const [showNav, setShowNav] = useState(false)
  return (
    <div>
      {/* <header className="z-show fixed top-0 w-full bg-white p-side h-20 md:h-24 flex items-center justify-between border-b">
        <div>
          <Link href="">
            <img src="/assets/logo.png" alt="" className="w-40" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <Link href="/">
            <li className="text-blue-900 px-3 mx-3">Home</li>
          </Link>
          <Link href="#process">
            <li className="text-blue-900 px-3 mx-3">How It Works</li>
          </Link>
          <Link href="#faq">
            <li className="text-blue-900 px-3 mx-3">FAQs</li>
          </Link>
        </div>
        <Link href="#footer" className="hidden lg:block">
          <Button title={"Contact Us"} color={true} />
        </Link>
        <i onClick={() => setShowNav(!showNav)} className={`fa-solid ${showNav ? "fa-times" : "fa-bars"} mr-2 heading-bg lg:hidden`}></i>
      </header> */}
      <header className="fixed top-0 w-full lg:static bg-white p-side h-20 z-show lg:h-44 flex items-center justify-between">
        <div>
          <Link href="">
            <img src="/assets/logo.png" alt="" className="w-40" />
          </Link>
        </div>
        <div className="hidden lg:flex items-center">
          <Link href="/">
            <li className="text-blue-900 px-3 mx-3">Home</li>
          </Link>
          {/* <Link href="">
          <li className="text-blue-900 px-3 mx-3">About Us</li>
        </Link> */}
          <Link href="#process">
            <li className="text-blue-900 px-3 mx-3">How It Works</li>
          </Link>
          <Link href="#faq">
            <li className="text-blue-900 px-3 mx-3">FAQs</li>
          </Link>
        </div>
        <Link href="#footer" className="hidden lg:block">
          <Button title={"Contact Us"} color={true} />
        </Link>
        <i onClick={() => setShowNav(!showNav)} className={`fa-solid ${showNav ? "fa-times" : "fa-bars"} mr-2 heading-bg lg:hidden`}></i>
      </header>
      <nav className={`${showNav ? "open-nav" : "close-nav"} border-t fixed top-20 md:top-24 lg:hidden bg-white w-full z-10`}>
        <div onClick={() => setShowNav(false)} className="py-3 border-b">
          <Link href="/">
            <li className="text-blue-900 px-3 mx-3">Home</li>
          </Link>
        </div>
        {/* <Link href="">
          <li className="text-blue-900 px-3 mx-3">About Us</li>
        </Link> */}
        <div onClick={() => setShowNav(false)} className="py-3 border-b">
          <Link href="#process">
            <li className="text-blue-900 px-3 mx-3">How It Works</li>
          </Link>
        </div>
        <div onClick={() => setShowNav(false)} className="py-3 border-b">
          <Link href="#faq">
            <li className="text-blue-900 px-3 mx-3">FAQs</li>
          </Link>
        </div>
        <div onClick={() => setShowNav(false)} className="py-3 border-b">
          <Link href="#footer">
            <li className="text-blue-900 px-3 mx-3">Contact Us</li>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;