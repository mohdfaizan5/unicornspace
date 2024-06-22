import React from "react";
// import Button from "./pieces/Button";

const ProjectBoard = () => {
  return (
    <section
      className={`hover:bg-gradient-to-r hover:duration-1000 hover:transition-colors hover:ease-in hover:from-cyan-500 hover:to-blue-500 flex flex-col md:flex-row justify-between h-64 md:h-52  w-full border-b py-10  md:px-24 px-10 gap-5 items-st`}
    >
      <div>
        <h1 className="text-2xl font-satori-500">Cula</h1>
      </div>

      <div className="flex flex-col items-center gap-2 md:items-start">
        <p className="max-w-96">
          With a continuous 3D animation, we showcase Arqitel approach and show
          how migration data translates into real estate.
        </p>
        {/* <Button text="Live Website" /> */}
      </div>
    </section>
  );
};

export default ProjectBoard;
