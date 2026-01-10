"use client";

import React from "react";
import { Box, Typography, useTheme, Stack, alpha } from "@mui/material";
import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GithubCardSkeleton } from "./shared/cards.skeleton";
import { GithubCard } from "./shared/cards";
import { Repo } from "./types/repo.type";
import { useRouter } from "next/navigation";

export default function GithubRepoCarousel({ limit = 10 }: { limit?: number }) {
  const theme = useTheme();
  const trackRef = React.useRef<HTMLDivElement>(null);

  const [repos, setRepos] = React.useState<Repo[]>([]);
  const [isLoading, setLoading] = React.useState(false);
  const pausedRef = React.useRef(false);
  const router = useRouter();

  const fadeStrength = theme.palette.mode === "dark" ? 0.7 : 1;

  // 🔁 Fetch repos
  React.useEffect(() => {
    setLoading(true);
    axios
      .get<Repo[]>("https://api.github.com/users/hiranmay1000/repos")
      .then((res) => setRepos(res.data.slice(0, limit)))
      .finally(() => setLoading(false));
  }, [limit]);

  // 🔁 Infinite left auto-scroll
  React.useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    let rafId: number;

    const step = () => {
      if (!pausedRef.current) {
        track.scrollLeft += 0.4; // 👈 speed

        // reset when half scrolled (because we duplicate data)
        if (track.scrollLeft >= track.scrollWidth / 2) {
          track.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [repos]);

  const data = [...repos, ...repos]; // 👈 duplication for infinite loop

  return (
    <Stack sx={{ mt: 30 }}>
      <Typography
        variant="h4"
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          textAlign: "center",
          color: theme.palette.text.primary,
          mb: 1,
        }}
      >
        GitHub Repos
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
        Selected work, code and experiments
      </Typography>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          borderRadius: 5,
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: 120,
            zIndex: 3,
            pointerEvents: "none",
          },

          "&::before": {
            left: 0,
            background: `linear-gradient(
        to right,
        ${alpha(theme.palette.background.default, 1)} 0%,
        ${alpha(theme.palette.background.default, fadeStrength)} 35%,
        ${alpha(theme.palette.background.default, 0)} 100%
      )`,
          },

          "&::after": {
            right: 0,
            background: `linear-gradient(
        to left,
        ${alpha(theme.palette.background.default, 1)} 0%,
        ${alpha(theme.palette.background.default, fadeStrength)} 35%,
        ${alpha(theme.palette.background.default, 0)} 100%
      )`,
          },
        }}
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => (pausedRef.current = false)}
      >
        <Box
          ref={trackRef}
          sx={{
            display: "flex",
            gap: 3,
            py: 5,
            overflow: "hidden",
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => (
                <GithubCardSkeleton key={i} />
              ))
            : data.map((repo) => {
                return <GithubCard repo={repo} />;
              })}
        </Box>
      </Box>

      <Box
        height={100}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"relative"}
        borderRadius={"10px 10px 0 0"}
      >
        <Typography
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          color={theme.palette.text.secondary}
          borderBottom={`2px solid ${theme.palette.borderColor}`}
          fontSize={"24px"}
          fontWeight={"bolder"}
          height={50}
          width={130}
          sx={{
            transition: "0.3s ease-out",
            cursor: "pointer",
            "&:hover": {
              color: theme.palette.text.primary,
              fontSize: "25px",
              transform: "translateY(-6px)",
              animation: "paused",
              width: "135px",
            },
            "& svg": { fontSize: 22 },
          }}
          onClick={() => router.push("/githubrepos")}
        >
          View all <GitHubIcon sx={{ ml: 1 }} />
        </Typography>
      </Box>
    </Stack>
  );
}
