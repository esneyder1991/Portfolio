import { useState } from "react";

const Navbar = (props) => {
  const { theme } = props;
  const newFunction = () => {
    props.handleThemeSwitch();
  };

  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };
  return (
    <header className="z-30 flex justify-between py-4 px-2 items-center w-full fixed text-2xl text-white bg-purple-800 md:px-4 md:py-0">
      <i className="bx bx-diamond bx-burst bx-flip-horizontal"></i>
      <div className=" text-xl px-4">Esneider Miranda</div>
      <button className="hover:bg-violet-700 py-" onClick={newFunction}>
        {theme === "dark" ? (
          <span>
            <i className="bx bxs-sun"></i>
          </span>
        ) : (
          <span>
            <i className="bx bxs-moon"></i>
          </span>
        )}
      </button>
      <button onClick={handleShowNav}>
        {isShowNav === false ? (
          <span>
            <i className="bx bx-menu cursor-pointer md:hidden"></i>
          </span>
        ) : (
          <span>
            <i class="bx bx-x-circle cursor-pointer md:hidden"></i>
          </span>
        )}
      </button>

      <nav
        className={`text-white absolute top-full bg-purple-800    w-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid place-items-center text-lg  gap-1 duration-200
        md:static md:flex 
        md:w-auto
        md:justify-between 
        `}
      >
        <a
          className="hover:bg-violet-700 py-4 px-12 duration-100 hover:border  hover:border-pink-300"
          href="#home"
        >
          Home
        </a>
        <a
          className="hover:bg-violet-700 py-4 px-12 duration-100 hover:border  hover:border-pink-300"
          href="#skill"
        >
          Skill
        </a>
        <a
          className="hover:bg-violet-700 py-4 px-12 duration-100 hover:border  hover:border-pink-300"
          href="#projects"
        >
          Projects
        </a>
        <a
          className="hover:bg-violet-700 py-4 px-12 duration-100 hover:border  hover:border-pink-300"
          href="#contact"
        >
          Contact me
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
