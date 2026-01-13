"use client";

import React from "react";
import { Box, Paper, Typography } from "@mui/material";
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
      target.style.setProperty("--x", `${e.clientX - rect.left}`);
      target.style.setProperty("--y", `${e.clientY - rect.top}`);
    };

    document.addEventListener("pointermove", handleMove);
    return () => document.removeEventListener("pointermove", handleMove);
  }, []);
};

const cards = [
  {
    title: "LinkedIn",
    desc: "Professional experience, roles and network",
    icon: "https://img.icons8.com/color/96/linkedin.png",
    link: "https://www.linkedin.com/in/hiranmay1000/",
  },
  {
    title: "LeetCode",
    desc: "600+ problems · Strong DSA & problem-solving",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png",
    link: "https://leetcode.com/u/hiranmay1000/",
  },
  {
    title: "GitHub",
    desc: "Production-ready projects & clean architecture",
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
        <Paper
          key={card.title}
          elevation={3}
          data-glow
          className="glass-card professional"
          role="button"
          tabIndex={0}
          onClick={() => window.open(card.link, "_blank")}
          onKeyDown={(e) =>
            e.key === "Enter" && window.open(card.link, "_blank")
          }
          style={{
            backgroundColor: theme.palette.background.paper,
          }}
        >
          <Box className="card-icon">
            <img
              src={card.icon}
              alt={card.title}
              width={52}
              height={52}
              style={{
                filter:
                  card.title === "GitHub" && theme.palette.mode === "dark"
                    ? "invert(1)"
                    : "none",
              }}
            />
          </Box>

          <Typography className="card-title">{card.title}</Typography>

          <Typography className="card-desc">{card.desc}</Typography>

          <span className="card-cta">Open profile</span>
        </Paper>
      ))}
    </section>
  );
}
