"use client";

import React from "react";
import { Box, Typography, Link as MUILink, useTheme } from "@mui/material";
import axios from "axios";
import { GithubCard } from "./shared/cards";
import { GithubCardSkeleton } from "./shared/cards.skeleton";
import { Repo } from "./types/repo.type";

export default function GithubRepoSection(props: { limit?: number }) {
  const [repos, setRepos] = React.useState<Repo[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const { limit } = props;
  const theme = useTheme();

  const getRepoDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get<Repo[]>(
        "https://api.github.com/users/hiranmay1000/repos"
      );
      setRepos(response.data);
    } catch (error) {
      console.error("Error fetching repos:", error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getRepoDetails();
  }, []);

  // displayed repos according to current limit
  const displayed = repos.slice(0, limit);

  return (
    <Box
      id="githubrepos"
      sx={{
        padding: "120px 0",
        position: "relative",
        color: "white",
      }}
    >
      {/* keyframes: keep inside component so they are present */}
      <style>{`
        @keyframes fadeUp {
          0%   { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

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
          maxWidth: 1200,
          mx: "auto",
          px: 3,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <GithubCardSkeleton key={i} />
            ))
          : displayed.map((repo) => {
              return <GithubCard repo={repo} />;
            })}
      </Box>
    </Box>
  );
}
