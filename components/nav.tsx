import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Varela, Roboto } from "next/font/google";
import { FaHome, FaUser, FaFolder, FaPhoneAlt } from "react-icons/fa";

const varela = Varela({ weight: "400", subsets: ["latin"] });

export default function Nav() {
  return (
    <>
      <div
        className={`flex flex-col fixed w-24 md:w-72 py-12 px-4 md:px-8 overflow-hidden h-full mt-12 border-r-2 border-[#232327] text-[#CCC] ${varela.className}`}
      >
        <div className="flex items-center gap-5 justify-center h-20">
          <Image
            src="/logo.svg"
            width="50"
            height="50"
            alt="logo"
            className="scale-130 md:scale-100"
          />
          <div className="flex flex-col hidden md:block">
            <h1 className="text-xl font-bold">Astro</h1>
            <p className="text-xs font-light">Portfolio v3</p>
          </div>
        </div>
        <ul className="flex flex-col py-8 gap-4 md:gap-0">
          <li>
            <a
              href="./"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary" className="w-48">
                <p className="hidden md:block">Home</p>
                <FaHome className="block md:hidden text-[#CCC] text-3xl" />
              </Button>
            </a>
          </li>
          <li>
            <a
              href="./about"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary" className="w-48">
                <p className="hidden md:block">About</p>
                <FaUser className="block md:hidden text-[#CCC] text-3xl" />
              </Button>
            </a>
          </li>
          <li>
            <a
              href="./projects"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary" className="w-48">
                <p className="hidden md:block">Projects</p>
                <FaPhoneAlt className="block md:hidden text-[#CCC] text-3xl" />
              </Button>
            </a>
          </li>
          <li>
            <a
              href="./contacts"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary" className="w-48">
                <p className="hidden md:block">Contact</p>
                <FaFolder className="block md:hidden text-[#CCC] text-3xl" />
              </Button>
            </a>
          </li>
        </ul>
        <div className="fixed bottom-10 text-sm hidden md:block">
          <p>
            Copyright © <i className="italic">2024</i>
          </p>
        </div>
      </div>
    </>
  );
}
