"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

export default function Home() {
  const { toast } = useToast();

  return (
    <main className="flex min-h-screen flex-col p-24 text-[#CCC] ml-72 bg-[url('/a.svg')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-6xl font-bold mt-12 font-bold w-1/5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 600, damping: 10 }}
          className="w-auto"
        >
          <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#49B2C4] to-[#2745C8]">
            About
          </b>
        </motion.div>
      </h1>
      <div className="grid grid-rows-3 grid-col-4 gap-x-24 gap-y-4 mt-12">
        <div className="row-span-2 flex  items-center">
          <Image src="/logo.svg" width="150" height="10" alt="logo"/>
        </div>
        <div className="row-span-1 col-span-2">
          <p className="w-4/5 text-sm tracking-wider text-[#CCC]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div className="row-span-1 col-span-2">
          <p className="w-4/5 text-sm tracking-wider text-[#CCC]">
          Id consectetur purus ut faucibus. Non consectetur a erat nam at lectus. Amet dictum sit amet justo donec enim diam vulputate ut. Tortor at auctor urna nunc id cursus. Duis tristique sollicitudin nibh sit. Placerat duis ultricies lacus sed turpis tincidunt id aliquet. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Elementum tempus egestas sed sed risus pretium quam vulputate.
          </p>
        </div>

        <div className="flex flex-row gap-4 row-span-1 ml-32 col-span-4">
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            width="40"
            height="10"
            alt="img"
          />
          <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"
            width="40"
            height="10"
            alt="img"
          />
        </div>
      </div>
    </main>
  );
}
