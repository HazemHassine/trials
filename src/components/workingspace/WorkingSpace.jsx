import React, { useState } from "react";
import Explorer from "./explorer/Explorer";
import Editor from "./editor/Editor";


function WorkingSpace() {
  const [sideBarOpen, setSideBarOpen] = useState(true);
  return <div className="text-3xl text-black bg-red-500">
    <Explorer/>
    <Editor/>
  </div>;
}

export default WorkingSpace;
