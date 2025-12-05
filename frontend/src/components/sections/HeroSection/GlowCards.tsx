import "../../../styles/glowcards.css";
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
        <span data-glow />
        <button data-glow className="glow-btn">
          <span>LinkedIn</span>
        </button>
      </article>
      <article data-glow>
        <span data-glow />
        <button data-glow className="glow-btn">
          <span>Leetcode</span>
        </button>
      </article>
      <article data-glow>
        <span data-glow />
        <button data-glow className="glow-btn">
          <span>GitHub</span>
        </button>
      </article>
    </main>
  );
};

export default GlowCards;
