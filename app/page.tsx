"use client";
import Image from "next/image";
import React from "react";
import { PinContainer } from "@/components/3d-pin";
import { BackgroundGradient } from "@/components/background-gradient";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card";
import Spotlight from "@/components/Spotlight";
import { BackgroundBeams } from "@/components/background-beams";
import { MaskContainer } from "@/components/svgg-mask";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
      <h1 className="text-9xl font-serif text-slate-50 mt-10">
        Hello I'm Kartik Saxena
      </h1>
      <div className="flex ">
        <div className="h-[40rem] w-full flex items-center ">
          <PinContainer
            title="Kartik Dezigns"
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
        </div>

        <div className="h-[40rem] w-full flex items-center ">
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
        </div>
        <div className="h-[40rem] w-full flex items-center ">
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
          The first rule of <span className="text-red-500">MRR Club</span> is
          you do not talk about MRR Club. The second rule of MRR Club is you DO
          NOT talk about <span className="text-red-500">MRR Club</span>.
        </MaskContainer>
      </div>

      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
            Lets Talk It Out!
          </h1>
          <p></p>
          <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
            Welcome to MailJet, the best transactional email service on the web.
            We provide reliable, scalable, and customizable email solutions for
            your business. Whether you&apos;re sending order confirmations,
            password reset emails, or promotional campaigns, MailJet has got you
            covered.
          </p>
          <input
            type="text"
            placeholder="KartikDesigns"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder: text-white p-3"
          />
        </div>
        <BackgroundBeams />
      </div>
    </main>
  );
}
