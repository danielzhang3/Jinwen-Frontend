"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const handleToggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const handleAboutClick = () => {
    // Scroll to the about section
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleLoginClick = () => {
    alert("You clicked the Login button!");
    // Optionally, you can also navigate to the login page
    //router.push("/auth/login");
  };
  return (
    <header className="relative shadow-lg px-3 z-40 py-4 border-b-2 border-solid border-[#3190E6]">
      <nav className="flex justify-between">
        <div className="w-[130px] md:w-[144px] flex items-center">
          <Image
            src="/assets/image/logo.png"
            alt="logo"
            width={144}
            height={41.8}
          />
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto  bg-white flex md:items-center gap-1 top-[100%] ${
              isMobileMenuOpen ? "left-0" : "left-[-100%]"
            } px-5 md:py-0 py-5 `}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[3.1vw] gap-8">
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff7534] to-[#0066af]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#494F53]">
                <a
                  className="font-[300] leading-[23.5px] text-[20px] "
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff7534] to-[#0066af] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#494F53]">
                <a
                  className="font-[300] leading-[23.5px] text-[20px] "
                  href="#Strategy"
                  onClick={handleLoginClick}
                >
                  Strategy
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff7534] to-[#0066af] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#494F53]">
                <a
                  className="font-[300] leading-[23.5px] text-[20px] "
                  href="#about"
                  onClick={handleAboutClick}
                >
                  About
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff7534] to-[#0066af] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#494F53]">
                <a
                  className="font-[300] leading-[23.5px] text-[20px] "
                  href="#feature"
                  onClick={handleAboutClick}
                >
                  Features
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff7534] to-[#0066af] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#494F53]">
                <a
                  className="font-[300] leading-[23.5px] text-[20px] "
                  href="#testimonial"
                  onClick={handleAboutClick}
                >
                  Testimonial
                </a>
              </li>
              <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#ff7534] to-[#0066af] after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 text-[#494F53]">
                <a
                  className="font-[300] leading-[23.5px] text-[20px] "
                  href="#Contact"
                  onClick={handleAboutClick}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="   bg-[#ff7534] hover:bg-[#0066af]  font-bold text-white px-7 py-3 mr-3"
            onClick={() => router.push("/auth/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="text-[30px] cursor-pointer md:hidden"
            onClick={handleLoginClick}
          
          >
            {isMobileMenuOpen ? <IoClose /> : <IoMenuOutline />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;