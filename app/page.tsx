"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";
import { PinContainer } from "@/components/3d-pin";
import { BackgroundGradient } from "@/components/background-gradient";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Spotlight from "@/components/Spotlight";
import { BackgroundBeams } from "@/components/background-beams";
import { MaskContainer } from "@/components/svgg-mask";
import { HeroParallax } from "@/components/parallax";
import {products} from "@/constants/constants";
import { GoogleGeminiEffect } from "@/components/goole-gemini";
import { EvervaultCard, Icon } from "@/components/hoverCard";
import { AnimatedTooltip } from "@/components/animated-tooltip";

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/text-reveal";

import { LampContainer } from "@/components/lamp";



export default function Home() {
 
    const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (


    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
      <h1 className="text-9xl font-mons text-slate-50 mt-10">
        Hello I'm Kartik Saxena
      </h1>
      

      <div className="h-[50rem] w-full flex items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-6xl font-bold">
                A Full Stack Developer with a passion for
              creating robust and scalable web applications. With a wealth of
              experience in both front-end and back-end technologies
            </p>
          }
          className="h-[40rem] border rounded-md"
        >
         Moreover I'm A <span className="text-red-500">Designer</span> who
          loves to make eye soothing designs and sometimes I'm <span className="text-red-500">Batman🦇</span>
          Let's not talk about <span className="text-red-500">My Vengeance</span>.
        </MaskContainer>
      </div>

      
      <div
      className="h-[300vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
      ref={ref}
    >


      
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>
    

    <div className="flex items-center justify-center bg-[#0E0E10] h-[40rem] rounded-2xl w-full">

    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-20 p-4 relative h-[30rem]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
 
      <EvervaultCard text="Try Me!" />
 
      <h2 className="dark:text-white text-black mt-4 text-sm font-light">
        Get a way to develop your project with me.
      </h2>
      <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
        Watch me hover
      </p>
    </div>
      <TextRevealCard
        text="with great development"
        revealText="comes good design"
      >
        <TextRevealCardTitle>
        <div className="flex items-center justify-center text-4xl">
          Sometimes,It needs one person🕺to make a change!
          </div>
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          <div className="flex items-center  text-2xl">
         So lets shake hands and make a deal.
         </div>
        </TextRevealCardDescription>
      </TextRevealCard>

    </div>

    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Let's Get You The Highlight <br />You Deserve!
      </motion.h1>
      <div className="flex flex-row-reverse gap-x-5 mt-20">


      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xl font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>

    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-12 ring-3 ring-white/10 ">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf0Cg3V13zNCnjALaUCq7jedLEHzBAg_FemXWW701UWHteWvw/viewform?usp=sf_link">
    <span>
     Let's Connect 
    </span>
    </a>
    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>

  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>


<button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xl font-semibold leading-6  text-white inline-block">
  <span className="absolute inset-0 overflow-hidden rounded-full">
    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
  </span>

    <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-4 px-12  ring-3 ring-white/10 ">
 
    <span>
    My Resume
    </span>

    <svg
      fill="none"
      height="16"
      viewBox="0 0 24 24"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.75 8.75L14.25 12L10.75 15.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  </div>

  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
</button>


</div>





</LampContainer>


    
    </div>

);
}
