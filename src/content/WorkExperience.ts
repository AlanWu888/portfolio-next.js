export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Graduate DevSecOps Engineer",
    company: "IBM Consulting, London, UK",
    duration: "Oct 2024 – Present",
    description:
      "Contributed to the frontend of AI assistant proof-of-concepts and supported cloud migration using AWS services like S3, DynamoDB, and WebSocket APIs. Enhanced agile workflows with Terraform, JIRA, GitHub, and React, optimizing CI/CD pipelines.",
  },
  {
    role: "Technical Consultant Intern",
    company: "IBM iX, London, UK",
    duration: "Aug 2022 – Aug 2023",
    description:
      "Worked on Audi and EXOPOC projects. As a Full-stack Developer for Audi, collaborated with a large team to implement Figma designs, improve analytics with AEM, and integrate AWS-based solutions, boosting engagement by 30%. As a Back-end Developer for EXOPOC, built scalable middleware and documentation to support long-term maintainability.",
  },
  {
    role: "Private Tutor (Maths and Computer Science)",
    company: "MyTutor.co.uk",
    duration: "Jan 2021 – May 2024",
    description:
      "Delivered customized tutoring sessions for GCSE and A-Level students. Enhanced academic outcomes by at least one grade on average and maintained high satisfaction through collaboration with schools and parents.",
  },
];
