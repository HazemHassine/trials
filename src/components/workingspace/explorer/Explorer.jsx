import React from "react";
import { MdTransitEnterexit } from "react-icons/md";
import planet from "../../../assets/Planet.png";
import "rsuite/dist/rsuite.min.css";
import DropdownSpaces from "./DropdownSpaces";
import Sessions from "./Sessions";
function Explorer(props) {
  const setSideBarOpen = props.setSideBarOpen;
  const closeExplorer = () => {
    setSideBarOpen(false);
  };

  return (
    <div className="h-screen flex flex-col w-1/4 border-r-2 border-[#D4D4D4] px-6">
      <MdTransitEnterexit
        size={30}
        color="#a0a0a0"
        className="self-end mt-6 cursor-pointer"
        onClick={() => {
          console.log("clicked");
          closeExplorer();
        }}
      />
      <div className="flex items-center">
        <img height={70} src={planet} width={70} className="mr-8" />
        <DropdownSpaces className="w-full" />
      </div>
      <Sessions />
    </div>
  );
}

export default Explorer;
