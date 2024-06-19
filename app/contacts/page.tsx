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
      <h1 className="text-6xl font-bold mt-12 font-bold w-2/5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 600, damping: 10 }}
          className="w-auto"
        >
          <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#49B2C4] to-[#2745C8]">
            Contact Me
          </b>
        </motion.div>
      </h1>
      <p className="my-6">Feel free to reach out to me via the following</p>
      <div className="my-12 flex flex-col justify-left items-left gap-4 w-2/5">
      <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
        >
        <Button
          variant="secondary"
          className="text-left w-full border-2 border-[#AAAAAA1A] p-12"
          onClick={() => {
            navigator.clipboard.writeText("astro_develops");
            toast({
              description: "Copied to clipboard",
            });
          }}
        >
          <FaDiscord className="text-3xl mr-4" />
          <div className="flex flex-col">
            <h1 className="">Discord</h1>
            <p className="italic text-xs mt-2">astro_develops</p>
          </div>
        </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
        >
        <Button
          variant="secondary"
          className="text-left w-full border-2 border-[#AAAAAA1A] p-12"
          onClick={() => {
            navigator.clipboard.writeText("astromp777@gmail.com");
            toast({
              description: "Copied to clipboard",
            });
          }}
        >
          <MdEmail className="text-3xl mr-4" />
          <div className="flex flex-col">
            <h1 className="">Email</h1>
            <p className="italic text-xs mt-2">astromp777@gmail.com</p>
          </div>
        </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="box rounded-full"
        >
        <a href="https://github.com/astro-develops" target="blank">
          <Button
            variant="secondary"
            className="text-left w-full border-2 border-[#AAAAAA1A] p-12"
          >
            <FaGithub className="text-3xl mr-4" />
            <div className="flex flex-col">
              <h1 className="">Github</h1>
              <p className="italic text-xs mt-2">astro-develops</p>
            </div>
          </Button>
        </a>
        </motion.div>
      </div>
    </main>
  );
}
