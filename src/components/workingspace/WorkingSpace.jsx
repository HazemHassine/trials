import React, { useState } from "react";
import Explorer from "./explorer/Explorer";
import Editor from "./editor/Editor";
import { motion } from "framer-motion";

const variants = {

  closed: { x: "-100%" },
};

function WorkingSpace() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  const [width, setWidth] = useState("1/4");

  const handleAnimationComplete = (defintion) => {
    if (defintion === "open") {
      return
    }
    setWidth("0");
  };

  
  return (
    <div className="flex text-black h-full w-screen overflow-hidden">
      <motion.div
        animate={sideBarOpen ? "open" : "closed"}
        variants={variants}
        className={`w-${width}`}
        onAnimationComplete={(defintion) => handleAnimationComplete(defintion)}
      >
        <Explorer setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen}/>
      </motion.div>
      <Editor />
    </div>
  );
}

export default WorkingSpace;