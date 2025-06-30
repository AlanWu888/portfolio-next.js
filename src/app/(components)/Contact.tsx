import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 text-center"
      style={{ backgroundColor: "var(--nav-hover)" }}
    >
      <h2 className="text-3xl font-bold mb-6 text-white">Connect with me!</h2>

      <div className="flex justify-center gap-6 mb-10">
        <a
          href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full p-3 shadow-md border transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
          style={{ borderColor: "var(--nav-hover)" }}
        >
          <Linkedin size={24} />
        </a>
        <a
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_URL}`}
          className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full p-3 shadow-md border transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
          style={{ borderColor: "var(--nav-hover)" }}
        >
          <Mail size={24} />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-neutral-800 text-black dark:text-white rounded-full p-3 shadow-md border transition-transform duration-200 hover:scale-110 hover:-translate-y-1"
          style={{ borderColor: "var(--nav-hover)" }}
        >
          <Github size={24} />
        </a>
      </div>

      <div className="text-sm text-white max-w-xl mx-auto space-y-2 px-4">
        <p>
          Built with{" "}
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            Next.js
          </a>{" "}
          and{" "}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            Tailwind CSS
          </a>
          , deployed with{" "}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            Vercel
          </a>{" "}
          in{" "}
          <a
            href="https://code.visualstudio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            Visual Studio Code
          </a>
          .
        </p>
        <p>
          Check out the code for this site -{" "}
          <a
            href="https://github.com/AlanWu888/portfolio-next.js"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline-offset-2 hover:underline"
          >
            here
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
