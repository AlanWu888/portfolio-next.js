"use client";

import { useTheme } from "next-themes";
import React from "react";

interface ThemedButtonProps extends React.ComponentProps<"a"> {
  children: React.ReactNode;
}

const ThemedButton: React.FC<ThemedButtonProps> = ({ children, href, ...rest }) => {
  const { theme } = useTheme();

  const baseStyle: React.CSSProperties = {
    borderColor: "var(--nav-hover)",
    backgroundColor: "var(--nav-hover)",
    color: theme === "dark" ? "white" : "black",
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "var(--background)";
    e.currentTarget.style.color = theme === "dark" ? "white" : "black";
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.backgroundColor = "var(--nav-hover)";
    e.currentTarget.style.color = theme === "dark" ? "white" : "black";
  };

  return (
    <a
      href={href}
      {...rest}
      className={`px-6 py-3 rounded-md border-2 text-sm font-semibold transition-colors ${rest.className || ""}`}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
};

export default ThemedButton;
