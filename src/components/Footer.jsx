import React from "react";

const Footer = () => {
  return (
    <section className="relative  text-white md:bg-indigo-900/60  mt-[100px] md:py-12">
      <article className="grid gap-4 md:gap-14  place-content-center mb-4 p-3 md:flex">
        <div>
          <a className="cursor-pointer" href="#home">
            <i className="bx bx-home"></i>
            <span className="ml-4">Home</span>
          </a>
        </div>

        <div>
          <a className="cursor-pointer" href="#home">
            <i className="bx bx-user"></i>
            <span className="ml-4">About me</span>
          </a>
        </div>

        <div>
          <a className="cursor-pointer" href="#projects">
            <i className="bx bxs-briefcase-alt"></i>
            <span className="ml-4">Work</span>
          </a>
        </div>

        <div>
          <a href="#contact">
            <i className="bx bxs-phone"></i>
            <span className="ml-4">Contact</span>
          </a>
        </div>
      </article>

      <article className="flex gap-6 justify-center mt-10">
        <div className="bg-blue-600 rounded-full  h-6 aspect-square text-center">
          <button>
            <a
              href="https://www.linkedin.com/in/esneyder-david-miranda-tapias-169b5b276/"
              target="_blank"
            >
              <img src="/images/linkedin.png" alt="Linkedin icon" />
            </a>
          </button>
        </div>
        <div className="bg-blue-900 rounded-full  h-6 aspect-square text-center justify-center">
          <button>
            <a href="https://github.com/esneyder1991" target="_blank">
              <img src="/images/github.png" alt="github icon" />
            </a>
          </button>
        </div>
      </article>
      <div>
        <hr className=" border-[1px] m-4 border-gray-700/50 w-[230px] relative mx-auto md:w-[90%]" />
      </div>
      <div className="w-[300px] mx-auto  text-center text-sm">
        <p>• Copyright ©2024 | All rights reserved •</p>
        <p>Esneider Miranda</p>
      </div>
    </section>
  );
};

export default Footer;
