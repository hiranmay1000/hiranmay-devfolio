"use client";

import {
  Box,
  Typography,
  Link,
  Stack,
  IconButton,
  useTheme,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        px: 4,
        py: 3,
        borderTop: "1px solid",
        borderColor: "divider",
        backgroundColor: theme.palette.background.glass,
        fontFamily: "DM Sans",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        alignItems={{ xs: "flex-start", sm: "center" }}
        justifyContent="space-between"
      >
        {/* Left: Name + copyright */}
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Hiranmay.dev · Built with ❤️
        </Typography>

        {/* Right: Links + socials */}
        <Stack direction="row" spacing={3} alignItems="center">
          <Stack direction="row" spacing={2}>
            <Link href="#work" underline="hover" color="text.secondary">
              Work
            </Link>
            <Link href="#about" underline="hover" color="text.secondary">
              About
            </Link>
            <Link href="#contact" underline="hover" color="text.secondary">
              Contact
            </Link>
          </Stack>

          <Stack direction="row" spacing={1}>
            <IconButton
              href="https://github.com/hiranmay1000"
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: theme.palette.error.main,
                  backgroundColor: "transparent",
                },
              }}
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              href="https://linkedin.com/in/hiranmay1000"
              target="_blank"
              rel="noreferrer"
              size="small"
              sx={{
                color: "text.secondary",
                "&:hover": {
                  color: theme.palette.error.main,
                  backgroundColor: "transparent",
                },
              }}
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
