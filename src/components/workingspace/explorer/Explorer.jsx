import React from "react";
import { MdTransitEnterexit } from "react-icons/md";
import planet from "../../../assets/Planet.png";
import "rsuite/dist/rsuite.min.css";
import DropdownSpaces from "./DropdownSpaces";

function Explorer(props) {
  const setSideBarOpen = props.setSideBarOpen;
  const closeExplorer = () => {
    setSideBarOpen(false);
  };
  
  return (
    <div className="h-screen flex flex-col w-1/4 border-r-2 border-[#D4D4D4]">
      <MdTransitEnterexit
        size={30}
        color="#a0a0a0"
        className="self-end mt-6 mr-6 cursor-pointer"
        onClick={() => {
          console.log("clicked");
          closeExplorer();
        }}
      />
      <div className="flex items-center px-6">
      <img
          height={70}
          src={planet}
          width={70}
          className="mr-8"
        />  
    <DropdownSpaces className="w-full"/>
      </div>
    </div>
  );
}

export default Explorer;
