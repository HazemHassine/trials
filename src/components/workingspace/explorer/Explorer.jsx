import React, {useState} from "react";
import { MdTransitEnterexit } from "react-icons/md";
import planet from "../../../assets/Planet.png";
import "rsuite/dist/rsuite.min.css";
import DropdownSpaces from "./DropdownSpaces";
import Sessions from "./Sessions";
import Documents from "./Documents";


function Explorer(props) {
  const setSideBarOpen = props.setSideBarOpen;
  const sideBarOpen = props.sideBarOpen;

  const closeExplorer = () => {
    setSideBarOpen(false);
  };
  const [selectedSpace, setSelectedSpace] = useState("");
  const getSelected = (newSelected) => {
    setSelectedSpace(newSelected);
  };
  
  return (
    <div className="flex h-screen flex-col w-1/4 border-r-2 border-[#D4D4D4] px-6">
      <MdTransitEnterexit
        size={30}
        color="#a0a0a0"
        className={`mt-6 cursor-pointer rotate-45 self-end ${sideBarOpen ? "translate-x-0": "translate-x-16 rotate-[225deg]"}`}
        onClick={() => {
          console.log("clicked");
          setSideBarOpen(!sideBarOpen)
        }}
      />
      <div className="flex items-center">
        <img height={70} src={planet} width={70} className="mr-8" />
        <DropdownSpaces getSelected={getSelected} className="w-full" />
      </div>
      <Sessions />
      <Documents currentSpace={selectedSpace}/>
    </div>
  );
}

export default Explorer;