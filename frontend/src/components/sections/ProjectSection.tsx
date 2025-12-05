"use client";

import {
  Typography,
  Box,
  Card,
  Stack,
  useTheme,
  Avatar,
  Button,
} from "@mui/material";

interface ProjectCardType {
  rotate: string;
  title?: string;
  desc?: string;
  iconFileName?: string;
  appLink?: string;
}

function ProjectCard(props: ProjectCardType) {
  const { rotate, title, desc, iconFileName, appLink } = props;
  const theme = useTheme();

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: 260, md: 290 },
        height: { xs: 240, sm: 260, md: 270 },
        display: "flex",
        flexDirection: "column",
        transform: `rotate(${rotate}deg)`,
        transition: "0.3s ease",
        p: 3,
        borderRadius: 7,
        background: theme.palette.background.glass,
        backdropFilter: "blur(10px)",
        border: `3px solid ${theme.palette.background.glass}`,
        "&:hover": {
          transform: "rotate(0deg)",
        },
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Avatar src={`/images/projects/${iconFileName}`} />
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Stack>

      <Typography sx={{ mt: 1 }}>{desc}</Typography>

      {/* ⬇ Buttons pinned to bottom, aligned side-by-side */}
      <Stack direction="row" spacing={1} sx={{ mt: "auto" }}>
        <Button
          variant="outlined"
          fullWidth
          sx={{
            backgroundColor: theme.palette.background.glass,
            color: theme.palette.text.primary,
            border: `1px solid #cbcbcbff`,
          }}
          // onClick={() => window.open(githubLink, "_blank")}
        >
          GitHub
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => window.open(appLink, "_blank")}
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
          }}
        >
          Open
        </Button>
      </Stack>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <Box
      id="projects"
      sx={{
        padding: "120px 0",
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        fontSize={{ xs: "4rem", md: "20rem" }}
        fontWeight="900"
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          opacity: 0.1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        PROJECTS
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={5}
        flexWrap="wrap"
        justifyContent="center"
        p={{ xs: 5, sm: 0 }}
      >
        <ProjectCard
          rotate={"-7"}
          title="Online SQL Runner"
          desc="Run SQL instantly in your browser — no installation needed."
          iconFileName="sql.jpg"
          appLink="https://sqlrunneronline.vercel.app"
        />
        <ProjectCard
          rotate={"3"}
          title="CarReportX"
          desc="Document vehicle condition, attach photos, and deliver polished PDF reports to customers instantly"
          appLink="https://getdamagereport.vercel.app"
        />
        <ProjectCard rotate={"-7"} />
        <ProjectCard rotate={"9"} />
        <ProjectCard rotate={"-6"} />
        <ProjectCard rotate={"9"} />
      </Stack>
    </Box>
  );
}
