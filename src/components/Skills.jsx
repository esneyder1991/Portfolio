import React from "react";

const Skills = () => {
  return (
    <div id="skill">
      <div className=" mx-auto max-w-[800px]">
        <div className="w-auto flex items-center justify-center">
          <h2 className="py-2 px-20 font-extrabold text-white text-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-lg mb-10">
            SKILLS
          </h2>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10">
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500 ">
            <img className="w-full" src="/images/html.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">HTML</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500 ">
            <img className="w-full" src="/images/css.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">CSS</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-400">
            <img className="w-full" src="/images/javascript.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">JavaScript</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-400 ">
            <img className="w-full" src="/images/react.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">React</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-700">
            <img className="w-full" src="/images/tailwind.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">Tailwind</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-lime-400">
            <img className="w-full" src="/images/node.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">Node JS</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-600">
            <img className="w-full" src="/images/git.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">Git</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-white">
            <img className="w-full" src="/images/github.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">GitHub</p>
          </div>
          <div className="w-[110px] flex flex-col justify-between shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-400">
            <img className="w-full" src="/images/postgres.png" alt="" />
            <p class="font-bold mt-4 mx-auto md:mt-2">PostgreSQL</p>
          </div>
        </div>
        <hr className="border-[1px] m-4 my-10 border-gray-700/50 w-5/6  relative mx-auto md:w-[70%]" />
      </div>
    </div>
  );
};

export default Skills;
