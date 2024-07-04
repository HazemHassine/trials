import React from "react";

function DocumentItem(props) {
  const doc = props.documentName;
  const currIDReally = props.currID === doc.id;
  const changeid = props.changeID;
    return (
    <div onClick={()=> changeid(doc.id)} key={doc.id} className={`my-1 flex cursor-pointer items-center transition-all rounded-lg ease-in-out hover:bg-gray-200 px-2 py-3 ${currIDReally? "font-bold bg-gray-200 hover:bg-gray-400": ""}`}>
      <p>{doc.name}</p>
    </div>
  );
}

export default DocumentItem;
