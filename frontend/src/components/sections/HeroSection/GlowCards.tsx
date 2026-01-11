"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import "./glowcards.css";
import { useTheme } from "@mui/material/styles";

const usePointerGlow = () => {
  React.useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "[data-glow]"
      ) as HTMLElement;
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      target.style.setProperty("--x", `${x}`);
      target.style.setProperty("--y", `${y}`);
    };

    document.addEventListener("pointermove", handleMove);
    return () => document.removeEventListener("pointermove", handleMove);
  }, []);
};

const cards = [
  {
    title: "LinkedIn",
    desc: "Professional profile & experience",
    icon: "https://img.icons8.com/color/96/linkedin.png",
    link: "https://www.linkedin.com/in/hiranmay1000/",
  },
  {
    title: "LeetCode",
    desc: "600+ DSA problems solved",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",
    link: "https://leetcode.com/u/hiranmay1000/",
  },
  {
    title: "GitHub",
    desc: "Real-world projects & clean code",
    icon: "https://img.icons8.com/sf-regular-filled/96/github.png",
    link: "https://github.com/hiranmay1000/",
  },
];

export default function GlowCards() {
  const theme = useTheme();

  usePointerGlow();

  return (
    <section className="cards-wrapper">
      {cards.map((card) => (
        <article
          key={card.title}
          data-glow
          className="glass-card"
          onClick={() => window.open(card.link, "_blank")}
          style={{
            backgroundColor: theme.palette.background.paper,
            border: `2px solid ${theme.palette.borderColor}`,
          }}
        >
          <Box className="card-icon">
            <img
              src={card.icon}
              width={72}
              height={72}
              alt={card.title}
              style={{
                filter:
                  card.title === "GitHub" && theme.palette.mode === "dark"
                    ? "invert(1)"
                    : "none",
              }}
            />
          </Box>

          <Typography variant="h6" className="card-title">
            {card.title}
          </Typography>

          <Typography className="card-desc">{card.desc}</Typography>

          <span className="card-cta">View Profile →</span>
        </article>
      ))}
    </section>
  );
}
