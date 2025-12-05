"use client";

import { useEffect, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

declare module "@mui/material/styles" {
  interface TypeText {
    highlight: string;
  }

  interface TypeBackground {
    glass: string;
  }

  interface Palette {
    text: TypeText;
    background: TypeBackground;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
  }
}

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const getDesignTokens = (mode: "light" | "dark") => ({
    palette: {
      mode,

      primary: {
        main: "#1976d2",
      },

      secondary: {
        main: "#9c27b0",
      },

      background: {
        default: mode === "light" ? "#f5f5f5" : "#000509",
        glass:
          mode === "light"
            ? "rgba(240, 240, 240, 0.07)"
            : "rgba(255, 255, 255, 0.07)",
        paper: mode === "light" ? "#ffffff" : "#0a0a0a",
      },

      text: {
        primary: mode === "light" ? "#111" : "#ffffff",
        secondary: mode === "light" ? "#555" : "#e1e1e1",
        highlight: mode === "light" ? "#eee" : "#333",
      },
    },

    typography: {
      fontFamily: "var(--font-dm-sans), sans-serif",
    },
  });

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "light") {
      root.style.setProperty("--background", "#ffffff");
      root.style.setProperty("--foreground", "#222");
    } else {
      root.style.setProperty("--background", "#000509ff");
      root.style.setProperty("--foreground", "#ededed");
    }
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
