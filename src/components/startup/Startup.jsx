import React from "react";
import planet from "../../assets/Planet.png";
import { Link } from "react-router-dom";

function Startup() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-t from-[#7F6AFF] to-[#5C4BC5] h-screen w-screen px-56 pt-12">
      <div className="flex justify-end w-full h-fit">
        <Link to="https://www.github.com/HazemHassine">
          <div className="cursor-pointer text-white text-3xl font-light">Changelog</div>
        </Link>
      </div>
      <div className="flex flex-col text-white w-[495px] h-[335px] mt-48">
        <h1 className="text-9xl font-extrabold text-center">Spaces</h1>
        <img
          height={218}
          src={planet}
          width={219}
          className="absolute translate-x-[65%] translate-y-[25%]"
        />
        <p className="my-36 text-2xl text-center font-light">
          <span className="font-medium">Simple</span>,{" "}
          <span className="font-medium">clean</span> and{" "}
          <span className="font-medium">fast</span> to get you're <br />
          <span className="underline">tasks done</span> best.
        </p>
      </div>
      <Link to="/space" className="mt-12">
        <div className="text-xl font-bold text-white border-white bg-none hover:bg-[rgba(255,255,255,0.4)] transition-all ease-in-out border-4 px-20 py-6 rounded-lg">
          Get Started
        </div>
      </Link>
    </div>
  );
}

export default Startup;
