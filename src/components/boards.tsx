// import { CornerDownRight, MoveRight } from "lucide-react";
import React from "react";
// import Button from "./pieces/Button";

const Boards = () => {
  return (
    <section className="flex flex-col-reverse justify-center mt-5 md:flex-row">
      <section className="bg-[#323238] mx-auto md:mx-1 mb-1 w-[96vw] h-52 md:w-[30vw] md:h-72 rounded-lg p-6 flex flex-col justify-between hover:bg-gray-800 group">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h5 className="text-sm font-satori-300 group-hover:translate-x-1">Up next:</h5>
            {/* <MoveRight className="group-hover:-translate-x-1" size={12} /> */}
          </div>
          <h2 className="text-2xl font-satori-500 text-balance max-w-[70%] leading-8 group-hover:translate-x-1">
            Insight and behind the scenes
          </h2>
        </div>
        <div className="group-hover:translate-x-1">
          <h6 className="text-xs font-satori-300">
            Explore what drives our team
          </h6>
        </div>
      </section>
      <section className="bg-[#323238] w-[96%] h-96 mx-auto md:mx-0 md:w-[40vw] md:h-72 rounded-lg flex flex-col justify-between p-5 hover:bg-gray-800 group mb-1 px-7">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <h5 className="text-sm font-satori-300 group-hover:translate-x-1">Up next:</h5>
            {/* <MoveRight className="group-hover:-translate-x-1" size={12} /> */}
          </div>
          <h2 className="text-2xl font-satori-500 text-balance max-w-[60%] leading-8 group-hover:translate-x-1">
            Lets get to it, <br /> together
          </h2>
        </div>
        <div className="group-hover:translate-x-1">
          <h1 className="text-5xl font-satori-500 text-balance max-w-[70%] py-3">
            Start a deal
          </h1> 
          {/* <Button text="Start"/> */}
        </div>
      </section>
    </section>
  );
};

export default Boards;
