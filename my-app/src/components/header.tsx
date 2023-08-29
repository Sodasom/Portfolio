import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScrollY = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScrollY);
    return () => window.removeEventListener("scroll", handleScrollY);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="flex items-center justify-between px-[60px] py-8">
        <h1
          className={`text-xl font-bold ${
            scrollY < 340 ? "text-white" : "text-black"
          }`}
        >
          🐮 DASOM
        </h1>
        <span
          className={`text-2xl ${
            scrollY < 340 ? "text-white" : "text-black"
          } md:hidden`}
          onClick={handleIsOpen}
        >
          {isOpen ? <MdClose /> : <BiMenu />}
        </span>
        <nav
          className={`${
            isOpen
              ? "block absolute top-16 right-10 mt-2 md:static md:mt-0"
              : "hidden md:block"
          }`}
        >
          <ul
            className={`text-gray-300 ${
              isOpen
                ? "flex flex-col text-right space-y-4 md:flex-row md:space-y-0"
                : "hidden md:flex"
            }`}
          >
            <li className="mr-5 hover:cursor-pointer hover:text-black">
              <Link to="about" smooth={true} duration={500}>
                ABOUT
              </Link>
            </li>
            <li className="mr-5 hover:cursor-pointer hover:text-black">
              <Link to="skills" smooth={true} duration={500}>
                SKILLS
              </Link>
            </li>
            <li className="mr-5 hover:cursor-pointer hover:text-black">
              <Link to="projects" smooth={true} duration={500}>
                PROJECTS
              </Link>
            </li>
            <li className="mr-5 hover:cursor-pointer hover:text-black">
              <Link to="contact" smooth={true} duration={500}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
