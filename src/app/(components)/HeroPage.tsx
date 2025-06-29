"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import ThemedButton from "./ThemedButton";

export default function HeroPage() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative overflow-hidden min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "graph-paper-dark text-white"
          : "graph-paper-light text-black"
      }`}
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
        ["--background-color" as any]: theme === "dark" ? "black" : "white",
      }}
    >
      <div className="relative flex flex-col md:flex-row items-center gap-8 max-w-6xl px-4 md:px-8 py-20 z-10">
        {/* image with green frame */}
        <div className="relative w-72 md:w-96 aspect-[3/4]">
          <div
            className="absolute -top-5 -left-5 w-full h-full scale-105 rounded-md z-0"
            style={{ backgroundColor: "var(--nav-hover)" }}
          />
          <div className="relative w-full h-full overflow-hidden rounded-md shadow-lg z-10">
            <Image
              src="/images/IMG_8328.jpeg"
              alt="Alan Wu"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* text and CTAs */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I'm Alan Wu.</h1>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            Graduate DevOps engineer at IBM Consulting with a strong interest in web development.
          </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <ThemedButton href="#projects">View my Projects</ThemedButton>
          <ThemedButton href="#contact">Contact Me</ThemedButton>
        </div>
        </div>
      </div>

      {/* bottom fade */}
      <div
        className="absolute bottom-0 left-0 w-full h-32 z-20 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, var(--background-color))",
        }}
      />
    </section>
  );
}
