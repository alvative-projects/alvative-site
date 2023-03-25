import React from "react";
import FeatureItem from "./common/FeatureItem";
import { features } from "../data/features";

function Features() {
  return (
    <div className="p-side">
      <div className="py-10 md:py-16 lg:py-24">
        <h1 className="font-semibold text-center heading-bg h-lg max-w-4xl mx-auto tracking-wide">
          Get more done faster with dedicated developers from our pipeline
        </h1>
        <p className="text-center max-w-xl mx-auto mt-6 mb-8 md:mb-14">
          With access to over 10,000 developers, we have pre-screened junior to
          mid-level devs that can help you get important work done
        </p>
        {features.map((item, index) => (
          <div key={index}>
            <FeatureItem
              heading={item.heading}
              main={item.main}
              close={item.close}
              image={item.image}
              reverse={item.reverse}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
