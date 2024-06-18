"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Home() {
  const { toast } = useToast();

  return (
    <main className="flex min-h-screen flex-col p-24 text-[#CCC] ml-72">
      <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#49B2C4] to-[#2745C8] mt-24">
        Contact Me
      </h1>
      <p className="my-6">Feel free to reach out to me via the following</p>
      <div className="my-12 flex flex-col justify-left items-left gap-4">
        <Button
          variant="secondary"
          className="text-left w-2/5 border-2 border-[#AAAAAA1A] p-12"
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

        <Button
          variant="secondary"
          className="text-left w-2/5 border-2 border-[#AAAAAA1A] p-12"
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

        <a href="https://github.com/astro-develops" target="blank">
          <Button
            variant="secondary"
            className="text-left w-2/5 border-2 border-[#AAAAAA1A] p-12"
          >
            <FaGithub className="text-3xl mr-4" />
            <div className="flex flex-col">
              <h1 className="">Github</h1>
              <p className="italic text-xs mt-2">astro-develops</p>
            </div>
          </Button>
        </a>
      </div>
    </main>
  );
}
