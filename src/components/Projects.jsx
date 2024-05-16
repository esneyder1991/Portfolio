import React from "react";

const Projects = () => {
  return (
    <section
      className="flex
      flex-wrap
      items-center
      justify-center
      gap-10
      mt-10 w-full"
      id="projects"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full mt-10">
        <div className="flex items-center justify-center">
          <h2 className="py-2 px-10 font-extrabold text-white text-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-lg mb-10">
            MY PROJECTS
          </h2>
        </div>

        <p className=" lg:text-left font-bold text-2xl text-white mx-12 md:mx-16">
          Check out some of my work here
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-6 mx-4 mt-6">
          <div className="shadow-md shadow-orange-900 rounded-lg sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover"
              src="/images/mascotas2.jpg"
              alt="human and pets"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 h-[50px] px-6 py-2 m-4 duration-200 hover:scale-125 border-s-violet-100 text-white">
                <a
                  href="https://rococo-bavarois-414a38.netlify.app"
                  target="_blank"
                >
                  Cats Blog
                </a>
              </button>
              <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/Cats-Blog"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>

          <div className="shadow-md shadow-red-900 rounded-lg max-w-md sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover "
              src="/images/academlo.jpg"
              alt="Academlo logo"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125 border-s-violet-100 text-white">
                <a
                  href="https://iridescent-meringue-121bfb.netlify.app"
                  target="_blank"
                >
                  E-commerce
                </a>
              </button>
              <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/entregable-javascript/tree/main"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-yellow-900 rounded-lg max-w-md sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover"
              src="/images/cookies.png"
              alt="Fortune cookies"
            />
            <div className="flex items-center justify-center ">
              <button className="w-2/3 h-[50px] px-6  m-4 duration-200 hover:scale-125 border-s-violet-100 text-white text-sm">
                <a
                  href="https://dynamic-toffee-02c48f.netlify.app"
                  target="_blank"
                >
                  Fortune Cookies Messages
                </a>
              </button>
              <button className="w-1/2 py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/test-entregable1/tree/main"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-blue-900 rounded-lg max-w-md sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover"
              src="/images/clima.jpg"
              alt="climate image"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 h-[50px] px-6  m-4 duration-200 hover:scale-125 border-s-violet-100 text-white">
                <a
                  href="https://dynamic-mermaid-8b9466.netlify.app"
                  target="_blank"
                >
                  Climate application
                </a>
              </button>
              <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/test-entregable2/tree/main"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-green-900 rounded-lg max-w-md sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover"
              src="/images/rickandmorty.webp"
              alt="Rick and morty image"
            />
            <div className="flex items-center justify-center ">
              <button className="w-1/2 h-[70px] px-6 duration-200 hover:scale-125 border-s-violet-100 text-white text-xs sm:text-sm ">
                <a
                  href="https://unique-maamoul-09d1cb.netlify.app"
                  target="_blank"
                >
                  Rick and Morty Multiverse Catalog
                </a>
              </button>
              <button className="w-1/4 px-6 py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/test-entregable3/tree/main"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-pink-900 rounded-lg max-w-md sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover"
              src="/images/registro.jpg"
              alt="Rick and morty image"
            />
            <div className="flex items-center justify-center">
              <button className="w-2/3 h-[50px] px-6  m-4 duration-200 hover:scale-125 border-s-violet-100 text-white text-sm">
                <a
                  href="https://prismatic-marshmallow-a1de6c.netlify.app"
                  target="_blank"
                >
                  User Account Registration
                </a>
              </button>
              <button className="w-1/2  py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/test-entregable4/tree/main"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-red-900 rounded-lg max-w-md sm:max-w-md lg:w-[300px] w-[240px]">
            <img
              className="rounded-md duration-200 hover:scale-105 cursor-pointer w-full h-40 object-cover"
              src="/images/pokedex.webp"
              alt="pokedex image"
            />
            <div className="flex items-center justify-center">
              <button className="w-1/2 h-[70px] px-6 duration-200 hover:scale-125 border-s-violet-100 text-white text-sm">
                <a
                  href="https://papaya-bunny-0f897a.netlify.app"
                  target="_blank"
                >
                  Pokémon Type Gallery
                </a>
              </button>
              <button className="w-1/2 px-6 py-2 m-4 duration-200 hover:scale-125 text-white">
                <a
                  href="https://github.com/esneyder1991/test-entregable5/tree/main"
                  target="_blank"
                >
                  Code
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-[1px] m-4 my-10 border-gray-700/50 w-5/6 relative mx-auto md:w-[70%]" />
    </section>
  );
};

export default Projects;
