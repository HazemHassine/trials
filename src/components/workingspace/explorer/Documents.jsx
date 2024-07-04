import React, { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
import { motion } from "framer-motion";
import DocumentItem from "./DocumentItem";

function Documents(props) {
  const variants = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  };
  const documentsList = [
    { id: 1, name: "Document 1" },
    { id: 2, name: "Document 2" },
    { id: 3, name: "Document 3" },
  ];

  const [currID, setCurrID] = useState(1);
  const changeID = (newID) => setCurrID(newID);
  const [documentsOpened, setDocumentsOpened] = useState(true);
  
  return (
    <div className="flex flex-col gap-4">
      <div className="text-[#a0a0a0] flex items-center justify-between h-fit px-2">
        <p className="text-lg font-bold">{props.currentSpace}</p>
        <motion.div
          animate={!documentsOpened ? "open" : "closed"}
          variants={variants}
        >
          <IoIosArrowDropdown
            size={20}
            className="cursor-pointer"
            onClick={() => setDocumentsOpened(!documentsOpened)}
          />
        </motion.div>
      </div>
      <motion.div
        animate={!documentsOpened ? { opacity: 0 } : { opacity: 1 }}
        className={`${
          documentsOpened ? "h-fit" : "h-0 hidden"
        } "overflow-hidden flex flex-col text-base gap-1"`}
      >
        {documentsList.map((doc) => (
          <DocumentItem
            documentName={doc}
            currID={currID}
            changeID={changeID}
          />
        ))}
        <div className="my-1 text-gray-400 text-center flex gap-5 justify-center items-center px-2 py-3 border-2 opacity-55 hover:opacity-100 ease-in-out transition-all border-gray-400 cursor-pointer rounded-lg">
          Add Document <CiCirclePlus size={20} />
        </div>
      </motion.div>
    </div>
  );
}

export default Documents;