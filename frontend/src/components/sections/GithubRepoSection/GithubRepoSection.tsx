"use client";

import React from "react";
import {
  Box,
  Typography,
  Chip,
  Link as MUILink,
  Divider,
  useTheme,
  Paper,
  IconButton,
  Skeleton,
} from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import GitHubIcon from "@mui/icons-material/GitHub";
import axios from "axios";

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics?: string[];
  created_at: string;
  pushed_at: string;
  visibility: string;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
  });
}

export default function GithubRepoSection(props: { limit?: number }) {
  const [repos, setRepos] = React.useState<Repo[]>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [prevLimit, setPrevLimit] = React.useState<number>(6);

  const { limit } = props;
  const theme = useTheme();
  const router = useRouter();
  const pathname = usePathname();

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

  // React.useEffect(() => {
  //   fetch("https://api.github.com/users/hiranmay1000/repos")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // sort by pushed_at desc for consistent ordering (optional)
  //       const sorted = Array.isArray(data)
  //         ? data.sort(
  //             (a: any, b: any) =>
  //               new Date(b.pushed_at).getTime() -
  //               new Date(a.pushed_at).getTime()
  //           )
  //         : [];
  //       setRepos(sorted);
  //     })
  //     .catch(() => setRepos([]));
  // }, []);

  const handleViewAllClick = () => {
    router.push("/githubrepos");
  };

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
          ? Array.from({ length: 6 }).map((_, i) => (
              <Paper
                key={i}
                elevation={3}
                sx={{
                  p: 3,
                  width: "280px",
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                  border: `3px solid ${theme.palette.background.glass}`,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {/* Title */}
                <Skeleton
                  variant="text"
                  height={22}
                  width="70%"
                  sx={{ bgcolor: theme.palette.background.default }}
                />
                <Skeleton
                  variant="text"
                  height={14}
                  width="40%"
                  sx={{ bgcolor: theme.palette.background.default }}
                />

                {/* Description */}
                <Skeleton
                  variant="rounded"
                  height={50}
                  sx={{ bgcolor: theme.palette.background.default }}
                />

                {/* Chips */}
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
                  <Skeleton
                    variant="rounded"
                    height={26}
                    width={60}
                    sx={{ bgcolor: theme.palette.background.default }}
                  />
                  <Skeleton
                    variant="rounded"
                    height={26}
                    width={50}
                    sx={{ bgcolor: theme.palette.background.default }}
                  />
                  <Skeleton
                    variant="rounded"
                    height={26}
                    width={70}
                    sx={{ bgcolor: theme.palette.background.default }}
                  />
                </Box>

                <Divider
                  sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.15)" }}
                />

                {/* Bottom row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Skeleton
                    variant="text"
                    width={120}
                    height={18}
                    sx={{ bgcolor: theme.palette.background.default }}
                  />
                  <Skeleton
                    variant="rounded"
                    width={50}
                    height={18}
                    sx={{ bgcolor: theme.palette.background.default }}
                  />
                </Box>
              </Paper>
            ))
          : displayed.map((repo, i) => {
              // find index in the full repo list to determine if this item is newly revealed
              const indexInAll = repos.findIndex((r) => r.id === repo.id);
              // const isNewlyRevealed =
              //   indexInAll >= prevLimit && limit > prevLimit;

              return (
                <Paper
                  key={repo.id}
                  elevation={3}
                  sx={{
                    p: 3,
                    maxWidth: "280px",
                    borderRadius: 4,
                    backdropFilter: "blur(10px)",
                    // border: `3px solid ${theme.palette.background.glass}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "transform 0.3s, box-shadow 0.3s",

                    // animation only for newly revealed items when expanding
                    // ...(isNewlyRevealed
                    //   ? {
                    //       opacity: 0,
                    //       transform: "translateY(18px)",
                    //       animation: `fadeUp 0.55s ease forwards`,
                    //       animationDelay: `${(indexInAll - prevLimit) * 0.1}s`,
                    //     }
                    //   : {
                    //       // already visible items should be fully visible (no animation)
                    //       opacity: 1,
                    //       transform: "translateY(0)",
                    //     }),

                    "&:hover": {
                      transform: "translateY(-6px)",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  {/* Top row: name + meta */}
                  <Box>
                    <Box sx={{ position: "relative", zIndex: 1, mb: 1.5 }}>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontFamily: "monospace",
                          color: theme.palette.text.primary,
                          textTransform: "uppercase",
                          letterSpacing: "0.18em",
                          fontWeight: 700,
                          mb: 0.5,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {repo.name}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: "grey.500",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                        }}
                      >
                        {repo.visibility || "public"} • since{" "}
                        {formatDate(repo.created_at)}
                      </Typography>
                    </Box>

                    {/* Middle: description */}
                    <Typography
                      variant="body2"
                      sx={{
                        color: "grey.300",
                        mb: 1.5,
                        minHeight: 52,
                      }}
                    >
                      {repo.description ||
                        "No description yet. Probably something experimental."}
                    </Typography>

                    {/* Topics / language row */}
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 0.75,
                        mb: 1.5,
                      }}
                    >
                      {repo.language && (
                        <Chip
                          label={repo.language}
                          size="small"
                          sx={{
                            borderRadius: "3px",
                            border: `1px solid ${theme.palette.borderColor}`,
                            background: theme.palette.background.default,
                            color: theme.palette.text.secondary,
                            fontSize: 11,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                          }}
                        />
                      )}

                      {repo.topics?.slice(0, 3).map((topic) => (
                        <Chip
                          key={topic}
                          label={topic}
                          size="small"
                          sx={{
                            borderRadius: "3px",
                            border: `1px solid ${theme.palette.borderColor}`,
                            background: theme.palette.background.default,
                            color: theme.palette.text.secondary,
                            fontSize: 10,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  <Box>
                    <Divider
                      sx={{
                        borderColor: "rgba(255,255,255,0.12)",
                        mb: 1.5,
                      }}
                    />

                    {/* Bottom: stats + link */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                        mt: "auto",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          color: "grey.400",
                        }}
                      >
                        <span>★ {repo.stargazers_count}</span>
                        <span>Forks {repo.forks_count}</span>
                        <span>Updated {formatDate(repo.pushed_at)}</span>
                      </Box>

                      <MUILink
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="none"
                        sx={{
                          fontSize: 11,
                          textTransform: "uppercase",
                          letterSpacing: "0.18em",
                          color: theme.palette.text.primary,
                          borderBottom: `1px solid ${theme.palette.text.primary}`,
                          pb: 0.4,
                          whiteSpace: "nowrap",
                          "&:hover": {
                            color: "grey.500",
                            borderColor: "grey.500",
                          },
                        }}
                      >
                        Open
                      </MUILink>
                    </Box>
                  </Box>
                </Paper>
              );
            })}
      </Box>

      {pathname !== "/githubrepos" && (
        <Box
          height={150}
          display={"flex"}
          alignItems={"end"}
          justifyContent={"center"}
          position={"relative"}
          top={-50}
          borderRadius={"10px 10px 0 0"}
        >
          <Typography
            textAlign={"center"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={theme.palette.text.secondary}
            fontSize={"24px"}
            fontWeight={"bolder"}
            height={50}
            width={250}
            sx={{
              transition: "0.3s",
              cursor: "pointer",
              "&:hover": {
                color: theme.palette.text.primary,
                fontSize: "25px",
                transform: "translateY(-6px)",
                textShadow: `0 0px 50px ${theme.palette.text.primary}`,
                animation: "paused",
              },
            }}
            onClick={handleViewAllClick}
          >
            View all <GitHubIcon sx={{ ml: 1 }} />
          </Typography>
        </Box>
      )}
    </Box>
  );
}
