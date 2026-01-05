"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Box } from "@mui/material";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const DRAWER_HEIGHT = 250;

  return (
    <>
      <Header open={menuOpen} setOpen={setMenuOpen} />

      <Box
        sx={{
          transform: menuOpen
            ? `translateY(${DRAWER_HEIGHT}px)`
            : "translateY(0)",
          transition: "transform 0.35s ease",
          willChange: "transform",
        }}
      >
        {children}
        <Footer />
      </Box>
    </>
  );
}
