import React from "react";

function SessionItem(props) {
  const session = props.session;
  const currIDReally = props.currID === session.id;
  const changeid = props.changeID;
    return (
    <div onClick={()=> changeid(session.id)} key={session.id} className={`my-1 flex cursor-pointer items-center transition-all rounded-lg ease-in-out hover:bg-gray-200 px-2 py-3 ${currIDReally? "font-bold bg-gray-200 hover:bg-gray-400": ""}`}>
      <p>{session.name}</p>
    </div>
  );
}

export default SessionItem;
