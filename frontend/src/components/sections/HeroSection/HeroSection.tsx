"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import Highlight from "@/components/shared/Highlight";
import GlowCards from "./GlowCards";

export default function HeroSection() {
  const theme = useTheme();

  return (
    <Container id="home" maxWidth="lg" sx={{ pt: 5, textAlign: "center" }}>
      <Typography variant="h3" fontWeight={700}>
        Hi, I’m <span style={{ color: "#6b6b6bff" }}>Hiranmay</span> 👋
      </Typography>

      <Typography variant="h3" fontWeight={700}>
        - <span style={{ color: "#6b6b6bff" }}>Software</span> ENGINEER
      </Typography>

      <Box
        sx={{
          borderRadius: 5,
          my: 10,
        }}
      >
        <GlowCards />
      </Box>

      <Typography sx={{ mt: 2, lineHeight: 1.8 }}>
        I’m a software engineer with a strong foundation in problem-solving and
        real-world development. I began my professional journey at ARC Document
        Solutions, where I worked with
        <Highlight>React.js</Highlight>, <Highlight>Next.js</Highlight>,
        <Highlight>Node.js</Highlight>, <Highlight>Flask</Highlight>, and tools
        like <Highlight>Postman</Highlight>, <Highlight>Git</Highlight>,
        <Highlight>Bugzilla</Highlight>, <Highlight>npm</Highlight>, and
        <Highlight>yarn</Highlight>. My experience shaped me into a developer
        who values clean architecture, scalable design, and smooth user
        experiences.
      </Typography>
    </Container>
  );
}
