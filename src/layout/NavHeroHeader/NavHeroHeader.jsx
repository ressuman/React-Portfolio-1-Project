import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import DesktopImage from "../../assets/images/desktop/HeroDesktop1.png";
import TabletImage from "../../assets/images/tablet/HeroTablet1.png";
import MobileImage from "../../assets/images/mobile/HeroMobile1.png";
import { Button } from "../../components/Button/Button";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
//import Typical from "react-typical";

export default function NavHeroHeader() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome! It’s a pleasure to meet you. I’m Richard Essuman.";

  useEffect(() => {
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div
      id="header"
      className="grid grid-cols-1 items-center justify-between mx-auto md:mx-0 gap-0 bg-chinese-black md:bg-raisin-black w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-between bg-raisin-black w-[60%] mx-auto md:w-full md:mx-0">
        <div className="text-white bg-[#181818] md:bg-chinese-black md:col-span-3">
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            <h1 className="font-bold text-center md:text-start text-fs24 md:text-fs32 transition transform ease-in-out duration-250 hover:text-eucalyptus hover:scale-105 hover:translate-y-1 py-4 ">
              richardessuman
            </h1>
          </Link>
        </div>
        <div className="flex justify-center md:justify-end mr-0 md:mr-6 gap-7 md:col-span-2 bg-[#181818] md:bg-raisin-black">
          <a
            href="https://github.com/ressuman"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <FaGithub
              size={20}
              className="transition ease-in-out duration-250 cursor-pointer"
            />
          </a>
          <a
            href="www.linkedin.com/in/richard-essuman"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <FaLinkedin
              size={20}
              className="cursor-pointer transition ease-in-out duration-250"
            />
          </a>
          <a
            href="https://x.com/ressuman001"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <FaXTwitter
              size={20}
              className="cursor-pointer transition ease-in-out duration-250"
            />
          </a>
          <a
            href="mailto:ressuman001@gmail.com"
            target="_blank"
            className="transition ease-in-out duration-250 hover:scale-110 hover:text-eucalyptus"
          >
            <IoMail
              size={20}
              className="cursor-pointer transition ease-in-out duration-250"
            />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-between bg-chinese-black">
        <div className="order-2 md:order-1 md:col-span-3 flex flex-col gap-5">
          <h2 className="text-fs32 md:text-fs36 lg:text-fs40 text-center md:text-start">
            {displayText.includes("Richard Essuman") ? (
              <>
                {displayText.split("Richard Essuman")[0]}
                <span className="underline decoration-eucalyptus hover:text-eucalyptus hover:decoration-white transition transform ease-in-out duration-250">
                  Richard Essuman
                </span>
                {displayText.split("Richard Essuman")[1]}
              </>
            ) : (
              displayText
            )}
          </h2>
          <p className="text-center md:text-start text-sm md:text-base lg:text-lg">
            As a full stack developer, I specialize in building robust,
            scalable, and accessible web applications. With a passion for
            innovative solutions and a focus on user-centric design, I strive to
            deliver seamless and engaging digital experiences. My expertise
            spans both front-end and back-end technologies, ensuring a
            comprehensive approach to web development.
          </p>

          <div className="text-center md:text-start">
            <Link to="contact" smooth={true} duration={500}>
              <Button className="mt-10 md:mt-12 lg:mt-14 text-white uppercase border-b-2 border-eucalyptus py-2 hover:text-eucalyptus hover:border-white transition transform ease-in-out duration-250 hover:scale-105 hover:translate-y-1">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative order-1 md:order-2 md:col-span-2 mb-10 md:mb-0">
          <img
            src={DesktopImage}
            alt="Desktop view"
            className="hidden lg:block w-full mx-0 h-auto"
          />
          <img
            src={TabletImage}
            alt="Tablet view"
            className="hidden md:block lg:hidden w-full mx-0 h-auto"
          />
          <img
            src={MobileImage}
            alt="Mobile view"
            className="block md:hidden w-[60%] mx-auto h-auto opacity-25"
          />
        </div>
      </div>
    </div>
  );
}
