import React from "react";

const Header = () => {
  return (
    <section className=" mx-auto ">
      <div id="home">
        <img
          className="absolute z-0 inset-0 object-cover"
          src="/images/firstPlanets.png"
          alt="Planet"
        />
      </div>
      <section className="text-white mx-auto z-10 w-full  ">
        <section>
          <div className="flex justify-center items-center relative z-10 py-3 md:py-10">
            <h2 className="text-black text-2xl lg:text-3xl font-bold text-center mt-14 w-[80%] max-w-lg">
              HI! I'm Esneider Miranda. A full-stack developer based in
              colombia.
            </h2>
          </div>

          <div className="relative bg-purplee w-auto  z-10 mt-6">
            <div className="bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 rounded-full w-[240px] aspect-square overflow-hidden mx-auto ">
              <img
                className="z-10  w-[200px] aspect-square translate-y-[25%] translate-x-[8%]"
                src="/images/Fotodeperfil.png"
                alt=""
              />
            </div>
            <div className="grid py-8">
              <div className="flex justify-center items-center ">
                <p className="grid leading-loose text-sm md:text-base pl-6 pr-2">
                  <span>
                    {" "}
                    <span className="text-black font-bold">C</span> onsidered a
                    highly committed professional to my projects.
                  </span>
                  <span>
                    <span className="text-black font-bold">O</span> btaining my
                    best results in the most adverse situations.
                  </span>
                  <span>
                    {" "}
                    <span className="text-black font-bold">D</span> isposition
                    and tenacity to solve all problems{" "}
                  </span>
                  <span>
                    <span className="text-black font-bold">E</span> specially
                    when it comes to working as a team to push projects forward.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <button className=" py-2 px-7  rounded-3xl bg-gradient-to-br from-purple-500 via-purple-800 to-blue-700 ">
                <a href="/CV_Esneyder_David_Miranda_Tapias" download>
                  Download CV
                </a>
              </button>
            </div>
            <hr className="border-[1px]  border-gray-700/50 w-5/6  relative mx-auto md:w-[70%] mt-14 mb-20 max-w-lg" />
          </div>
        </section>
      </section>
    </section>
  );
};

export default Header;
