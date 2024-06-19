"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const projects: { img: string; title: string; des: string; url: string }[] = [
  {
    img: "303.png",
    title: "Team 303",
    des: "FRC Robotics Website for Team 303",
    url: "https://team303.vercel.app/",
  },
  {
    img: "portfolio.png",
    title: "My Portfolio",
    des: "My personal developer portfolio",
    url: "https://astro-gamma-peach.vercel.app/",
  },
  {
    img: "303.png",
    title: "Team 303",
    des: "FRC Robotics Website for Team 303",
    url: "https://team303.vercel.app/",
  }
];

export default function Home() {
  const { toast } = useToast();

  return (
    <main className="flex min-h-screen flex-col p-24 text-[#CCC] ml-72 bg-[url('/a.svg')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-6xl font-bold mt-24 font-bold">
        <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#49B2C4] to-[#2745C8]">
          Projects
        </b>
      </h1>
      <p className="my-12">
        Working on making all my projects open-source. Till then check out a
        couple of my most recent ones
      </p>
      <div className="grid grid-cols-3 gap-4 justify-center">
        {projects.map((p, index) => (
          <a
            className="p-6 rounded-md bg-[#AAAAAA0a] border-[#CCCCCC12] border"
            href={p.url}
            target="#"
          >
            <Image
              src={`/projects/${p.img}`}
              alt="img"
              width="300"
              height="300"
              className="rounded"
            />
            <h1 className="text-[#CCC] my-4 font-bold text-xl">{p.title}</h1>

            <p className="text-[#CCCCCCAA] text-sm">
              {p.des}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
