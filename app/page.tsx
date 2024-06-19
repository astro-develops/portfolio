"use client"

import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"
import Image from "next/image";

export default function Home() {
  const { toast } = useToast()

  return (
    <main className="flex min-h-screen flex-col p-24 text-[#CCC] ml-72 bg-[url('/a.svg')] bg-no-repeat bg-cover bg-center">
      <h1 className="text-6xl font-bold mt-24 font-bold">
        Hi, I'm <b className="bg-clip-text text-transparent bg-gradient-to-r from-[#49B2C4] to-[#2745C8]">Astro</b>
      </h1>
      <p className="text-[#CCC] my-4">16 year old aspiring full stack web developer</p>
      <div className="flex flex-row gap-4">
        <a href="./projects"><Button variant="outline">Projects</Button></a>
        <a href="./contacts"><Button variant="lightoutline">Contact</Button></a>
      </div>
    </main>
  );
}

