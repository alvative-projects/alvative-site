import React from "react";
import ReviewItem from "./common/ReviewItem";
import ReviewSlider from "./common/ReviewSlider";

function Reviews() {
  return (
    <div className="p-side">
      <div className="pt-10">
        <p className="text-center md:text-lg">What Our Clients Say</p>
        <h1 className="font-semibold text-center heading-bg h-lg max-w-4xl mx-auto my-3 md:my-8">
          Why Companies Trust Alvative
        </h1>
        <p className="text-center max-w-2xl mx-auto">
          We provide vetted technical talents to support your business with
          Technical Support, API Integrations, Project Development,
          Documentation, Testing and so much more!
        </p>
        <ReviewSlider />
      </div>
    </div>
  );
}

export default Reviews;
