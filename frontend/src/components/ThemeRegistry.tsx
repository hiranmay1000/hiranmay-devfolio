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
    chip: string;
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

      primary: {
        main: "#1976d2",
      },

      secondary: {
        main: "#9c27b0",
      },

      background: {
        default: mode === "light" ? "#f6f7f9" : "#00080e",
        paper: mode === "light" ? "#fff" : "#000e1e",
        glass:
          mode === "light"
            ? "rgba(134, 134, 134, 0.07)"
            : "rgba(255, 255, 255, 0.2)",
        chip:
          mode === "light"
            ? "rgba(134, 134, 134, 0.14)"
            : "rgba(255, 255, 255, 0.17)",
      },

      borderColor: mode === "light" ? "#e1e1e1" : "rgba(255, 255, 255, 0.29)",
      boxShadow: "#3535355e",

      text: {
        primary: mode === "light" ? "#111" : "#ffffff",
        secondary: mode === "light" ? "#555" : "rgba(255,255,255,0.5)",
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
      root.style.setProperty("--background", "#f6f7f9");
      root.style.setProperty("--foreground", "#222");
    } else {
      root.style.setProperty("--background", "#00080e");
      root.style.setProperty("--foreground", "#ededed");
    }
  }, [mode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
