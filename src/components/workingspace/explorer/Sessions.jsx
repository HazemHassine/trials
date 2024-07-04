import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import SessionItem from "./SessionItem";

function Sessions() {
  const variants = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  };
  const sessionsList = [
    { id: 1, name: "🤩 History" },
    { id: 2, name: "👻 Computer Science" },
    { id: 3, name: "🥵 USA Life" },
  ];
  const [currID, setCurrID] = useState(1);
  const changeID = (newID) => setCurrID(newID);
  const [sessionsOpened, setSessionsOpened] = useState(true);
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[#a0a0a0] flex items-center justify-between h-fit px-2">
        <p className="text-lg font-bold">SESSIONS</p>
        <div className="flex gap-1">
          <CiCirclePlus size={20} className="cursor-pointer" />
          <motion.div
            animate={!sessionsOpened ? "open" : "closed"}
            variants={variants}
          >
            <IoIosArrowDropdown
              size={20}
              className="cursor-pointer"
              onClick={() => setSessionsOpened(!sessionsOpened)}
            />
          </motion.div>
        </div>
      </div>
      <motion.div animate={!sessionsOpened ? {opacity:0} : {opacity: 1}} className={`${sessionsOpened? "h-fit": "h-0 hidden"} "overflow-hidden flex flex-col text-base gap-1"`}>
        {sessionsList.map((session) => (
          <SessionItem session={session} currID={currID} changeID={changeID}/>
        ))}
      </motion.div>
    </div>
  );
}

export default Sessions;
