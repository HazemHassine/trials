import React, { useState } from "react";
import Explorer from "./explorer/Explorer";
import Editor from "./editor/Editor";
import { motion } from "framer-motion";

const variants = {
  open: { x: "0%" },
  closed: { x: "-25%" },
};

function WorkingSpace() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return (
    <div className="flex text-black h-full w-screen overflow-hidden">
      <motion.div
        animate={sideBarOpen ? "open" : "closed"}
        variants={variants}
        className="w-full"
      >
        <Explorer setSideBarOpen={setSideBarOpen} sideBarOpen={sideBarOpen}/>
      </motion.div>
      <Editor />
    </div>
  );
}

export default WorkingSpace;
