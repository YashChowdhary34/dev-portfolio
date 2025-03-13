import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { HeroOrbit } from "@/components/HeroOrbit";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%, black_70%, transparent)">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className="size-[620px] hero-ring"></div>
        <div className="size-[820px] hero-ring"></div>
        <div className="size-[1020px] hero-ring"></div>
        <div className="size-[1220px] hero-ring"></div>
        <HeroOrbit size={800} rotation={-70}>
          <StarIcon classname="size-28 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={550} rotation={20}>
          <StarIcon classname="size-12 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={590} rotation={95}>
          <StarIcon classname="size-8 text-red-300" />
        </HeroOrbit>
        <HeroOrbit size={430} rotation={-15}>
          <SparkleIcon classname="size-8 text-red-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} rotation={-80}>
          <SparkleIcon classname="size-5 text-red-300/20" />
        </HeroOrbit>
        <HeroOrbit size={530} rotation={180}>
          <SparkleIcon classname="size-10 text-red-300/20" />
        </HeroOrbit>
        <HeroOrbit size={710} rotation={140}>
          <SparkleIcon classname="size-14 text-red-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={0}>
          <div className="size-3 rounded-full bg-red-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={520} rotation={80}>
          <div className="size-2 rounded-full bg-red-300/20"></div>
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5}>
          <div className="size-2 rounded-full bg-red-300/20"></div>
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind laptop"
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full"></div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl text-center mt-8 tracking-wide">
            Building efficient and scalable applications
          </h1>
          <p className="mt-4 text-center text-white/60 md:text-lg">
            I’m a software engineer and a data storyteller passionate about
            writing user-friendly software and transforming raw data into
            meaningful insights that drive impactful decisions.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown classname="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
