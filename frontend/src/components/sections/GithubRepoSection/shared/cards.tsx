"use client";

import {
  Box,
  Chip,
  Divider,
  Paper,
  Typography,
  Link as MUILink,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";
import { Repo } from "../types/repo.type";

export const GithubCard = (props: { repo: Repo }) => {
  const { repo } = props;
  const theme = useTheme();
  const pathname = usePathname();

  function formatDate(iso: string) {
    return new Date(iso).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "short",
    });
  }

  return (
    <Paper
      key={repo.id}
      elevation={3}
      sx={{
        p: 3,
        width: pathname === "/githubrepos" ? "270px" : "auto",
        minWidth: pathname === "/githubrepos" ? undefined : "270px",
        minHeight: "350px",
        borderRadius: 4,
        backdropFilter: "blur(10px)",
        // border: `3px solid ${theme.palette.background.glass}`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        transition: "transform 0.3s, box-shadow 0.3s",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* Top row: name + meta */}
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
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
            {repo.visibility || "public"} • since {formatDate(repo.created_at)}
          </Typography>

          {/* Middle: description */}
          <Typography
            variant="body2"
            sx={{
              color: `${theme.palette.text.secondary}`,
              my: 1.5,
              minHeight: 52,
            }}
          >
            {repo.description
              ? repo.description.length > 100
                ? `${repo.description.slice(0, 100)}...`
                : repo.description
              : "No description yet."}
          </Typography>
        </Box>

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
                background: theme.palette.text.highlight,
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
                background: "transparent",
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
            <span style={{ fontSize: "10px" }}>
              Last Updated: {formatDate(repo.pushed_at)}
            </span>
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
};
