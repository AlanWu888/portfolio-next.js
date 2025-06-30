import React from "react";
import { projects } from "@/content/Projects";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";

export default function ProjectsSection() {
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const blobColors = isDark
    ? ["bg-purple-900", "bg-blue-900", "bg-teal-900", "bg-pink-900", "bg-indigo-900", "bg-emerald-900"]
    : ["bg-purple-300", "bg-blue-300", "bg-teal-300", "bg-pink-300", "bg-indigo-300", "bg-emerald-300"];

  return (
    <section id="projects" className="relative bg-muted/30 py-16 overflow-hidden">
      <style jsx global>{`
        @keyframes shakeXY {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-2px, -2px); }
          40% { transform: translate(2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(-2px, 2px); }
          100% { transform: translate(0, 0); }
        }

        .hover-shake-xy:hover {
          animation: shakeXY 0.5s ease-in-out;
        }
      `}</style>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className={`absolute top-[-10%] left-[-10%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob1 ${blobColors[0]}`} />
        <div className={`absolute top-[20%] left-[60%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob2 ${blobColors[1]}`} />
        <div className={`absolute bottom-[-10%] left-[30%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob3 ${blobColors[2]}`} />
        <div className={`absolute top-[60%] left-[10%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob4 ${blobColors[3]}`} />
        <div className={`absolute top-[30%] left-[80%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob5 ${blobColors[4]}`} />
        <div className={`absolute bottom-[20%] left-[75%] w-[300px] h-[300px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob6 ${blobColors[5]}`} />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-16 z-30 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to top, transparent, var(--background))",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-full h-16 z-30 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to bottom, transparent, var(--background))",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 md:px-10">
        <h2 className="text-3xl font-bold text-primary text-left mb-10">Personal Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full border border-border bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow backdrop-blur-sm bg-opacity-80"
            >
              <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 text-xs mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium hover-shake-xy outline outline-1 outline-transparent hover:outline-[var(--nav-hover)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-4 text-sm font-medium">
                {project.links.code && (
                  <a
                    href={project.links.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-primary hover:text-[var(--nav-hover)] transition-colors"
                  >
                    Code{" "}
                    <span className="group">
                      <ExternalLink
                        size={14}
                        className="ml-1 transition-transform group-hover:-translate-y-0.5 group-hover:-rotate-45"
                      />
                    </span>
                  </a>
                )}
                {project.links.docs && (
                  <a
                    href={project.links.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-primary hover:text-[var(--nav-hover)] transition-colors"
                  >
                    Docs{" "}
                    <span className="group">
                      <ExternalLink
                        className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:-rotate-45"
                      />
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 text-left">
          <a
            href={process.env.NEXT_PUBLIC_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center text-primary hover:text-[var(--nav-hover)] font-medium transition-colors"
          >
            Visit my GitHub
            <ArrowRight className="ml-2 h-4 w-4 group-hover:-translate-y-0.5 group-hover:-rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
