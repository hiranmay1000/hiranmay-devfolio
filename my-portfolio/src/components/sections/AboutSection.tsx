"use client";

import { Typography, Box, Stack, IconButton } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import AppsIcon from "@mui/icons-material/Apps";
import CallIcon from "@mui/icons-material/Call";

export default function AboutSection() {
  return (
    <Box
      id="about"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ m: "120px 0", height: "calc(100vh - 400px)" }}
    >
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ display: "flex", gap: 2 }}
      >
        <IconButton sx={{ color: "#eee" }}>
          <HomeIcon />
        </IconButton>

        <IconButton sx={{ color: "#eee" }}>
          <Person4Icon />
        </IconButton>

        <IconButton sx={{ color: "#eee" }}>
          <AppsIcon />
        </IconButton>

        <IconButton sx={{ color: "#eee" }}>
          <CallIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}
