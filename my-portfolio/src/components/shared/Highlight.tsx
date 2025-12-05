"use client";

import { Box, useTheme } from "@mui/material";

export default function Highlight({ children }: { children: React.ReactNode }) {
  const theme = useTheme();

  return (
    <Box
      component="span"
      sx={{
        bgcolor: theme.palette.text.highlight,
        px: 1,
        py: 0.3,
        borderRadius: "6px",
        fontWeight: 500,
        mx: 0.3,
      }}
    >
      {children}
    </Box>
  );
}
