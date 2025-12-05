import { Box, Typography, Link, Stack, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: theme.palette.background.glass,
        fontFamily: "DM Sans",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Left Section */}
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} My Application. All rights reserved.
        </Typography>

        {/* Right Section */}
        <Stack direction="row" spacing={3}>
          <Link href="#" underline="hover" color="text.secondary">
            Privacy Policy
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Terms of Service
          </Link>
          <Link href="#" underline="hover" color="text.secondary">
            Contact
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
