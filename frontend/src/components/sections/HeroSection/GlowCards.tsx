"use client";

import React from "react";
import { Box } from "@mui/material";
import "./glowcards.css";

const usePointerGlow = () => {
  React.useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest(
        "[data-glow]"
      ) as HTMLElement | null;

      if (!target) return;

      const rect = target.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const xp = x / rect.width;
      const yp = y / rect.height;

      target.style.setProperty("--x", x.toString());
      target.style.setProperty("--y", y.toString());
      target.style.setProperty("--xp", xp.toString());
      target.style.setProperty("--yp", yp.toString());
    };

    document.addEventListener("pointermove", handleMove);
    return () => document.removeEventListener("pointermove", handleMove);
  }, []);
};

const GlowCards = () => {
  usePointerGlow();

  return (
    <main>
      <article data-glow>
        <Box display="flex" alignItems="center" justifyContent="center">
          <img
            width="75"
            src="https://img.icons8.com/color/96/linkedin.png"
            alt="linkedin"
          />
        </Box>

        <span data-glow />

        <button
          data-glow
          className="glow-btn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/hiranmay1000/", "_blank")
          }
        >
          <span>LinkedIn</span>
        </button>
      </article>
      <article data-glow>
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width="75"
            height="75"
            src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo.png"
            alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-color-tal-revivo"
          />
        </Box>
        <span data-glow />
        <button
          data-glow
          className="glow-btn"
          onClick={() =>
            window.open("https://leetcode.com/u/hiranmay1000/", "_blank")
          }
        >
          <span>Leetcode</span>
        </button>
      </article>
      <article data-glow>
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            width="96"
            height="96"
            src="https://img.icons8.com/sf-regular-filled/96/github.png"
            alt="github"
          />
        </Box>
        <span data-glow />
        <button
          data-glow
          className="glow-btn"
          onClick={() =>
            window.open("https://github.com/hiranmay1000/", "_blank")
          }
        >
          <span>GitHub</span>
        </button>
      </article>
    </main>
  );
};

export default GlowCards;
