import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Varela, Roboto } from "next/font/google";

const varela = Varela({ weight: "400", subsets: ["latin"] });

export default function Nav() {
  return (
    <>
      <div className={`flex flex-col fixed w-64 py-12 px-8 overflow-hidden h-full mt-12 border-r-2 border-[#232327] text-[#CCC] ${varela.className}`}>
        <div className="flex items-center gap-5 justify-center h-20">
          <Image src="/logo.svg" width="50" height="50" alt="logo" />
          <div className="flex flex-col">
          <h1 className="text-xl">Astro</h1>
          <p className="text-xs">Portfolio v3</p>
          </div>
        </div>
        <ul className="flex flex-col py-8">
          <li>
            <a
              href="#"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary">
                Home
              </Button>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary">
                About
              </Button>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary">
                Projects
              </Button>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-medium flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <Button variant="secondary">
                Contact
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
