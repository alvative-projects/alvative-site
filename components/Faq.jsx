import React from "react";
import { faqs } from "../data/faqs";
import FaqItem from "./common/FaqItem";

function Faq() {
  return (
    <div id="faq" className="p-side light-bg">
      <div className="py-8 md:py-14">
        <h1 className="font-semibold text-center heading-bg h-lg max-w-4xl mx-auto tracking-wide mt-5">
          Frequently Asked Questions{" "}
        </h1>
        <p className="text-center max-w-sm mx-auto mt-5">
          Here are some basic questions and answers to help you get started.
        </p>
        <div className="max-w-5xl mt-5 md:mt-10 mx-auto">
          {faqs.map((item, index) => (
            <div key={index}>
              <FaqItem question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;
