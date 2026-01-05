import { Box, useMediaQuery } from "@mui/material";
import "./glowcards.css";
import React from "react";

export const usePointerGlow = () => {
  const [status, setStatus] = React.useState<{
    x: string;
    y: string;
    xp: string;
    yp: string;
  } | null>(null);

  React.useEffect(() => {
    const syncPointer = (e: any) => {
      const x = e.clientX.toFixed(2);
      const y = e.clientY.toFixed(2);
      const xp = (e.clientX / window.innerWidth).toFixed(2);
      const yp = (e.clientY / window.innerHeight).toFixed(2);

      document.documentElement.style.setProperty("--x", x);
      document.documentElement.style.setProperty("--xp", xp);
      document.documentElement.style.setProperty("--y", y);
      document.documentElement.style.setProperty("--yp", yp);

      setStatus({ x, y, xp, yp });
    };

    document.body.addEventListener("pointermove", syncPointer);
    return () => {
      document.body.removeEventListener("pointermove", syncPointer);
    };
  }, []);

  return status;
};

const GlowCards = () => {
  const _ = usePointerGlow();

  return (
    <main>
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
