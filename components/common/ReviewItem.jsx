import React from "react";

function ReviewItem({ message, logo, name, role }) {
  return (
    <div className="h-full grid grid-cols-1 xl:grid-cols-2">
      <div className="light-bg md:pt-5 xl:pb-10 xl:py-14 relative">
        <div className="absolute top-0 w-full flex justify-center">
          <img className="opacity-30 md:opacity-100" src="/assets/quote.svg" alt="" />
        </div>
        <div className="px-8 mt-4 xl:mt-10 review-box">
          <p className="text-sm leading-6">
            {message}
          </p>
        </div>
      </div>
      <div className="review-bg text-white px-10 flex items-center">
        <div className="py-5">
          <img className="mb-5 xl:mb-14" src={logo} alt="" />
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-sm text-gray-400 mt-2">{role}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
