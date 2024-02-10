"use client";
import Image from "next/image";
import React from "react";
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

    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
      <h1 className="text-9xl font-serif text-slate-50 mt-10">
        Hello I'm Kartik Saxena
      </h1>
      <div className="flex">
        <div className="h-[40rem] w-full flex items-center ">
          <a href="https://deepakopticals.vercel.app">
          <PinContainer
            title="Optical Store"
            href="https://kartikdesign.netlify.app"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Optical Webstore
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  The Widest Range of collections
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          </a>
        </div>

        <div className="h-[40rem] w-full flex items-center ">
        <a href="https://kartikdev.netlify.app">
          <PinContainer
            title="Kartik DeV"
            href="https://kartikdesign.netlify.app"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                Developer Portfolio
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Checkout The Blend Of Creativity and Technology!
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          </a>
        </div>


        <div className="h-[40rem] w-full flex items-center ">
        <a href="https://kartikdesign.netlify.app">
          <PinContainer
            title="Kartik Dezigns"
            href="https://kartikdesign.netlify.app"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                This is a 3d Tooltip for UI
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-slate-500 ">
                  Lets Dive into this world of UI
                </span>
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          </a>
        </div>
      </div>

      <div className="h-[40rem] w-full flex items-center justify-center overflow-hidden">
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
                A Full Stack Developer with a passion for
              creating robust and scalable web applications. With a wealth of
              experience in both front-end and back-end technologies
            </p>
          }
          className="h-[40rem] border rounded-md"
        >
         Sometimes I'm A <span className="text-red-500">Designer</span> who
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
      <TextRevealCard
        text="You know the business"
        revealText="I know the chemistry "
      >
        <TextRevealCardTitle>
          Sometimes,It needs one person to make a change!
        </TextRevealCardTitle>
        <TextRevealCardDescription>
         So lets shake hands and make a deal. I'll tell you something that only I know, if you can guess it correctly then we are good to go.
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
        Build lamps <br /> the right way
      </motion.h1>
    </LampContainer>
    </main>
  );
}
