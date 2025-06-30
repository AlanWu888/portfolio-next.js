import React from "react";
import { educationData } from "@/content/Education";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-16 px-4 md:px-10 max-w-5xl mx-auto">
      <div className="relative pl-8">
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-primary/60 to-transparent pointer-events-none -z-10" />
        <h2 className="text-3xl font-bold mb-10 text-primary text-left">Education</h2>

        <div className="space-y-6 relative z-10">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="border border-border rounded-2xl p-6 bg-background shadow-sm transition-all duration-300 hover:shadow-md hover:border-[var(--nav-hover)]"
            >
              <h3 className="text-xl font-semibold text-foreground">{edu.institution}</h3>
              <p className="text-muted-foreground mb-1">
                {edu.location} | {edu.duration}
              </p>
              <p className="text-sm text-foreground mb-1">{edu.degree}</p>
              <p className="text-sm text-foreground">{edu.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
