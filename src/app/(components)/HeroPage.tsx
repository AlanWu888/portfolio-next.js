"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import ThemedButton from "./ThemedButton";
import { Mail, Linkedin, Github } from "lucide-react";

export default function HeroPage() {
  const { theme } = useTheme();

  return (
    <section 
      id="about"
      className={`relative overflow-hidden min-h-screen flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "graph-paper-dark text-white"
          : "graph-paper-light text-black"
      }`}
    style={
      {
        backgroundColor: "var(--background-color)"
      } as React.CSSProperties
    }
    >
      <div className="relative flex flex-col md:flex-row items-center gap-8 max-w-6xl px-4 md:px-8 py-20 z-10 md:-translate-y-20">
        {/* image with highlight frame */}
        <div className="relative w-72 md:w-96 aspect-[3/4]">

          {/* Social Icons at the slightly lower bottom center */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-3">
            <a
              href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full p-2 shadow-md border transition-transform duration-200 ease-out transform hover:scale-110 hover:-translate-y-1"
              style={{ borderColor: "var(--nav-hover)" }}
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_URL}`}
              className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full p-2 shadow-md border transition-transform duration-200 ease-out transform hover:scale-110 hover:-translate-y-1"
              style={{ borderColor: "var(--nav-hover)" }}
            >
              <Mail size={20} />
            </a>
            <a
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full p-2 shadow-md border transition-transform duration-200 ease-out transform hover:scale-110 hover:-translate-y-1"
              style={{ borderColor: "var(--nav-hover)" }}
            >
              <Github size={20} />
            </a>
          </div>
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
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I&apos;m Alan Wu.</h1>
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
        className="absolute bottom-0 left-0 w-full h-16 md:h-32 lg:h-64 z-30 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />
    </section>
  );
}
