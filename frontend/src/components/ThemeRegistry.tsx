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
    glassHeader: string;
  }

  interface Palette {
    text: TypeText;
    background: TypeBackground;
    borderColor: string;
    boxShadow: string;
  }

  interface PaletteOptions {
    text?: Partial<TypeText>;
    background?: Partial<TypeBackground>;
    borderColor?: string;
    boxShadow?: string;
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

      primary: { main: "#1976d2" },
      secondary: { main: "#9c27b0" },

      background: {
        default: mode === "light" ? "#f6f7f9" : "#00080e",
        paper: mode === "light" ? "#ffffff" : "#000e1e",

        // cards, forms, containers
        glass:
          mode === "light"
            ? "rgba(255, 255, 255, 0.55)"
            : "rgba(0, 14, 30, 0.65)",

        // 👇 AppBar / Header glass (brighter)
        glassHeader:
          mode === "light"
            ? "rgba(255, 255, 255, 0.85)"
            : "rgba(10, 25, 45, 0.85)",
      },

      borderColor:
        mode === "light" ? "rgba(0, 0, 0, 0.08)" : "rgba(255, 255, 255, 0.12)",

      boxShadow:
        mode === "light"
          ? "0 6px 20px rgba(0, 0, 0, 0.1)"
          : "0 6px 20px rgba(0, 0, 0, 0.7)",

      text: {
        primary: mode === "light" ? "#111" : "#ffffff",
        secondary: mode === "light" ? "#555" : "rgba(255,255,255,0.6)",
        highlight:
          mode === "light"
            ? "rgba(236, 236, 236, 0.7)"
            : "rgba(68, 103, 147, 0.35)",
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
      root.style.setProperty("--background", "#f6f7f9");
      root.style.setProperty("--foreground", "#222");
    } else {
      root.style.setProperty("--background", "#00080e");
      root.style.setProperty("--foreground", "#ededed");
    }
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
