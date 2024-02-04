import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <header className="flex justify-between w-screen px-10 py-5">
        <div>
          <h1 className="text-primary font-primary text-xl mb-5">
            UnicornSpace
          </h1>
        </div>
        <nav className="hidden sm:flex">
          <a className="" href="">
            Services
          </a>
          <a href="">Case Studies</a>
          <a href="">Contact</a>
        </nav>
        <div>
          <button className="btn-primary">Book A Call</button>
        </div>
      </header>
      <section className="px-5">
        <h1 className="text-6xl text-balance">We help compains grow at scale</h1>
        <button className="btn-secondary">
          Scale us
        </button>
      </section>
    </div>
  );
};

export default HeroSection;
