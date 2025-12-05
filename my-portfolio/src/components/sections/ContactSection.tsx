import { Typography, Box } from "@mui/material";

export default function ContactSection() {
  return (
    <Box id="contact" sx={{ padding: "120px 0" }}>
      <Typography variant="h4" fontWeight={600}>
        Contact
      </Typography>

      <Typography sx={{ mt: 2 }}>Email: yourname@example.com</Typography>
    </Box>
  );
}
