import React from "react";
import { motion } from "framer-motion";

function GoToTop() {
  // const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 0);
  };
  // useEffect(() => {
  //   onTop()
  // }, [routePath]);
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeIn",
        repeatDelay: 0.5,
      }}
      whileHover={{
        y: 0,
        transition: { duration: 0.8 },
      }}
      onClick={() => onTop()}
      className="fixed bottom-10 right-3 md:right-10 w-10 xl:w-14 h-10 xl:h-14 cursor-pointer bg-black shadow-lg rounded-md btn-bg text-white flex items-center justify-center z-10"
    >
      <i className="fa-solid fa-arrow-up text-xl lg:text-2xl"></i>
    </motion.div>
  );
}

export default GoToTop;
