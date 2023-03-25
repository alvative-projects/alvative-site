import React from "react";

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
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-phone text-white text-3xl mb-3"></i>
            <p className="text-white">+2348064006070</p>
          </div>
          <div className="flex flex-col items-center">
            <i className="fa-solid fa-envelope text-white text-3xl mb-3"></i>
            <p className="text-white">info@alvative.com</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-6 pb-16">
        <div><img src="/assets/fb.svg" alt="" /></div>
        <div><img src="/assets/twitter.svg" alt="" /></div>
        <div><img src="/assets/instagram.svg" alt="" /></div>
      </div>
    </div>
  );
}

export default Footer;
