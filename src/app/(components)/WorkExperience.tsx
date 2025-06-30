import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { experiences } from "@/content/WorkExperience";

export default function WorkExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-16 px-4 md:px-10 max-w-5xl mx-auto"
    >
      <div className="relative p-8 rounded-2xl shadow-xl shadow-primary/20 ring-1 ring-primary/30 transform -translate-y-2">
        {/* Container for heading, experience list, and link */}
        <div className="relative z-10">
          {/* Vertical gradient line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/60 to-transparent pointer-events-none -z-10" />

          {/* Indented content to avoid overlapping the line */}
          <div className="pl-4">
            {/* Heading */}
            <h2 className="text-3xl font-bold mb-10 text-primary text-left">
              Work Experience
            </h2>

            {/* Experience Cards */}
            <div className="space-y-6">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="border border-border rounded-2xl p-6 bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--nav-hover)]"
                >
                  <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                  <p className="text-muted-foreground mb-2">
                    {exp.company} | {exp.duration}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{exp.description}</p>
                </div>
              ))}

              {/* View Full Resume Link */}
              <div className="pt-6">
                <Link
                  href="/cv"
                  className="group inline-flex items-center font-medium text-primary hover:text-[var(--nav-hover)] transition-colors duration-200"
                >
                  View Full Resume
                  <ArrowRight
                    className="ml-2 h-4 w-4 transition-all duration-200 transform group-hover:-translate-y-0.5 group-hover:-rotate-45 group-hover:text-[var(--nav-hover)]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
