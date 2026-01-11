"use client";

import React, { useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Button,
  Container,
  Typography,
  Alert,
  useTheme,
  InputAdornment,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";

export default function ContactForm() {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return setError("Please enter your name");
    if (!mail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail))
      return setError("Please enter a valid email");
    if (!msg.trim()) return setError("Please enter your message");

    setError("");
    setSubmitted(true);

    setTimeout(() => {
      setName("");
      setMail("");
      setMsg("");
      setSubmitted(false);
    }, 3000);
  };

  const inputSx = {
    "& .MuiOutlinedInput-root": {
      borderRadius: 2.5,
      background: theme.palette.background.glass,
      backdropFilter: "blur(10px)",
      transition: "all 0.3s ease",
      "& fieldset": {
        borderColor: theme.palette.borderColor,
      },
      "&:hover fieldset": {
        borderColor: alpha(theme.palette.text.primary, 0.35),
      },
      "&.Mui-focused fieldset": {
        borderColor: alpha(theme.palette.text.primary, 0.7),
        boxShadow: `0 0 16px ${alpha(theme.palette.text.primary, 0.25)}`,
      },
    },
    "& .MuiOutlinedInput-input": {
      color: theme.palette.text.primary,
      fontSize: "0.95rem",
      "&::placeholder": {
        color: theme.palette.text.secondary,
        opacity: 0.75,
      },
    },
  };

  return (
    <Container maxWidth="md" sx={{ py: 15 }}>
      <Box
        sx={{
          maxWidth: 650,
          mx: "auto",
          p: { xs: 3, sm: 5 },
          borderRadius: 5,
          background: `${theme.palette.background.glass}`,
          border: `5px solid ${theme.palette.borderColor}`,
          backdropFilter: "blur(25px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0px 14px 36px rgba(0,0,0,0.55)"
              : "0px 12px 28px rgba(0,0,0,0.12)",
          transition: "all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0px 22px 48px rgba(0,0,0,0.7)"
                : "0px 20px 40px rgba(0,0,0,0.18)",
          },
          "& .MuiOutlinedInput-root": {
            background: "none",
          },
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Get in Touch
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            I'd love to hear from you. Send a message!
          </Typography>
        </Box>

        {/* Alerts */}
        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}
        {submitted && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            ✅ Message sent successfully!
          </Alert>
        )}

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3.5} sx={{ mb: 4 }}>
            <TextField
              fullWidth
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon sx={{ color: theme.palette.text.secondary }} />
                  </InputAdornment>
                ),
              }}
              sx={inputSx}
            />

            <TextField
              fullWidth
              type="email"
              placeholder="john@example.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon sx={{ color: theme.palette.text.secondary }} />
                  </InputAdornment>
                ),
              }}
              sx={inputSx}
            />

            <TextField
              fullWidth
              multiline
              rows={5}
              placeholder="Type your message here..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" sx={{ mt: -12 }}>
                    <MessageIcon
                      sx={{
                        color: theme.palette.text.secondary,
                        mt: 1.5,
                      }}
                    />
                  </InputAdornment>
                ),
              }}
              sx={inputSx}
            />
          </Stack>

          {/* Button */}
          <Button
            fullWidth
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              py: 1.8,
              borderRadius: 2.5,
              fontWeight: 700,
              fontSize: "1.05rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 100%)"
                  : "linear-gradient(135deg, #f0f0f0 0%, #dcdcdc 100%)",
              color: theme.palette.text.primary,
              boxShadow:
                theme.palette.mode === "dark"
                  ? "0 16px 32px rgba(0,0,0,0.75)"
                  : "0 12px 24px rgba(0,0,0,0.18)",
              transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
              "&:hover": {
                transform: "translateY(-4px) scale(1.03)",
              },
              "&:active": {
                transform: "scale(0.97)",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
