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
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { ProjectDetails } from "../../../constants/project.constant";
interface ProjectCardType {
  rotate: string;
  title?: string;
  desc?: string;
  iconFileName?: string;
  githubLink?: string;
  appLink?: string;
}

function ProjectCard(props: ProjectCardType) {
  const { rotate, title, desc, iconFileName, githubLink, appLink } = props;
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
        backdropFilter: "blur(25px)",
        border: `3px solid ${theme.palette.borderColor}`,
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

      <Typography variant="body2" sx={{ mt: 1 }}>
        {desc}
      </Typography>

      <Stack
        direction="row"
        spacing={1}
        sx={{ mt: "auto", "& svg": { fontSize: 18 } }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: theme.palette.background.default,
            color: theme.palette.text.primary,
            gap: 1,
          }}
          onClick={() => window.open(githubLink, "_blank")}
        >
          GitHub
          <GitHubIcon />
        </Button>
        <Button
          variant="contained"
          fullWidth
          onClick={() => window.open(appLink, "_blank")}
          sx={{
            backgroundColor: theme.palette.background.glass,
            color: theme.palette.text.secondary,
            border: `1px solid ${theme.palette.borderColor} !important`,
            gap: 1,
          }}
        >
          Open
          <OpenInNewIcon />
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
        variant="h4"
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          textAlign: "center",
          mb: 1,
        }}
      >
        APPLICATIONS
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          color: "grey.400",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          mb: 6,
        }}
      >
        Code that solves. Projects that scale.
      </Typography>
      <Typography
        variant="h1"
        fontSize={{ xs: "4rem", md: "18rem" }}
        fontWeight="900"
        position="absolute"
        top="50%"
        left="50%"
        sx={{
          transform: "translate(-50%, -50%)",
          zIndex: -1,
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",

          background:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.07) 0%, rgba(151, 151, 151, 0.43) 50%, rgba(255, 255, 255, 0.1) 90%)",
          backgroundSize: "200% auto",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",

          animation: "shineText 25s linear infinite",

          "@keyframes shineText": {
            "0%": { backgroundPosition: "200% center" },
            "100%": { backgroundPosition: "-200% center" },
          },
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
        {ProjectDetails.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Stack>
    </Box>
  );
}
