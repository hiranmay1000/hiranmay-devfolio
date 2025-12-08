"use client";

import { Typography, Box, Stack, Paper, Chip } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import AppsIcon from "@mui/icons-material/Apps";

export default function AboutSection() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 6,
        pt: 12,
      }}
    >
      {/* ---------- Heading ---------- */}
      <Box textAlign="center">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.25em",
            textAlign: "center",
            mb: 1,
          }}
        >
          ABOUT ME
        </Typography>
        <Typography
          sx={{ maxWidth: 600, mx: "auto", opacity: 0.8, fontSize: 18 }}
        >
          I’m a passionate software developer who loves building clean UI,
          creative digital experiences, and scalable web products.
        </Typography>
      </Box>

      {/* ---------- Highlight Cards ---------- */}
      <Stack
        direction={{ xs: "column", md: "row" }}
        gap={3}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {[
          {
            icon: <Person4Icon fontSize="large" />,
            title: "Who Am I?",
            text: "Frontend + Backend developer, problem solver & constant learner.",
          },
          {
            icon: <AppsIcon fontSize="large" />,
            title: "What I Do",
            text: "Create modern UIs, scalable apps, and seamless digital experiences.",
          },
          {
            icon: <HomeIcon fontSize="large" />,
            title: "Location",
            text: "Based in India, available remotely across the globe.",
          },
        ].map((item, i) => (
          <Paper
            key={i}
            elevation={3}
            sx={{
              p: 3,
              width: 280,
              borderRadius: 4,
              textAlign: "center",
              backdropFilter: "blur(10px)",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-6px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              },
            }}
          >
            <Box sx={{ mb: 1 }}>{item.icon}</Box>
            <Typography fontWeight={600} fontSize="18px" mb={1}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              {item.text}
            </Typography>
          </Paper>
        ))}
      </Stack>

      {/* ---------- Skills Badges ---------- */}
      <Stack
        direction="row"
        gap={2}
        flexWrap="wrap"
        justifyContent="center"
        mt={2}
      >
        {[
          "React",
          "Node.js",
          "TypeScript",
          "Next.js",
          "MongoDB",
          "SQL",
          "AWS",
        ].map((skill) => (
          <Chip
            key={skill}
            label={skill}
            sx={{
              px: 2,
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(6px)",
              fontWeight: 600,
            }}
          />
        ))}
      </Stack>
    </Box>
  );
}
