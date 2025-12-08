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
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import MessageIcon from "@mui/icons-material/Message";
import { InputAdornment } from "@mui/material";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const theme = useTheme();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      setError("Please enter your name");
      return;
    }
    if (!mail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      setError("Please enter a valid email");
      return;
    }
    if (!msg.trim()) {
      setError("Please enter your message");
      return;
    }

    // Success
    setError("");
    setSubmitted(true);
    console.log({ name, mail, msg });

    // Reset form
    setTimeout(() => {
      setName("");
      setMail("");
      setMsg("");
      setSubmitted(false);
    }, 3000);
  };

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Box
        sx={{
          maxWidth: 650,
          mx: "auto",
          p: { xs: 3, sm: 5 },
          borderRadius: 4,
          background: theme.palette.background.default,
          backdropFilter: "blur(25px)",
          border: `3px solid ${theme.palette.borderColor}`,
          boxShadow:
            "0px 8px 32px rgba(0,0,0,0.3), inset 0px 1px 0px rgba(255,255,255,0.2)",
          transition: "all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 20% 50%, rgba(180,180,180,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          },
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow:
              "0px 16px 48px rgba(0,0,0,0.4), inset 0px 1px 0px rgba(255,255,255,0.3)",
            border: `3px solid ${theme.palette.borderColor}`,
          },
        }}
      >
        {/* Header */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: theme.palette.text.secondary,
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.secondary }}
          >
            I'd love to hear from you. Send a message!
          </Typography>
        </Box>

        {/* Alert Messages */}
        {error && (
          <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
            {error}
          </Alert>
        )}
        {submitted && (
          <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
            ✅ Message sent successfully! Thank you for reaching out.
          </Alert>
        )}

        {/* Form */}
        <Box component="form" onSubmit={handleSubmit}>
          <Stack spacing={3.5} sx={{ position: "relative", zIndex: 1, mb: 4 }}>
            {/* Name Input */}
            <TextField
              fullWidth
              variant="outlined"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon
                        sx={{ color: theme.palette.text.secondary }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.25)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(200,200,200,0.8)",
                    boxShadow: "0 0 20px rgba(200,200,200,0.4)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: theme.palette.text.secondary,
                  fontSize: "0.95rem",
                  "&::placeholder": {
                    color: "rgba(255,255,255,0.4)",
                    opacity: 1,
                  },
                },
                "& .MuiInputBase-input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px rgba(255,255,255,0.05) inset",
                  WebkitTextFillColor: "rgba(255,255,255,0.95)",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.6)",
                  "&.Mui-focused": {
                    color: "rgba(220,220,220,0.9)",
                  },
                },
              }}
            />

            {/* Email Input */}
            <TextField
              fullWidth
              variant="outlined"
              type="email"
              placeholder="john@example.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: theme.palette.text.secondary }} />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  border: "1.2px solid rgba(255,255,255,0.15)",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.25)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(200,200,200,0.8)",
                    boxShadow: "0 0 20px rgba(200,200,200,0.4)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: theme.palette.text.secondary,
                  fontSize: "0.95rem",
                  "&::placeholder": {
                    color: "rgba(255,255,255,0.4)",
                    opacity: 1,
                  },
                },
                "& .MuiInputBase-input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px rgba(255,255,255,0.05) inset",
                  WebkitTextFillColor: "rgba(255,255,255,0.95)",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.6)",
                  "&.Mui-focused": {
                    color: "rgba(220,220,220,0.9)",
                  },
                },
              }}
            />

            {/* Message Input */}
            <TextField
              fullWidth
              multiline
              rows={5}
              variant="outlined"
              // label="Your Message"
              placeholder="Type your message here..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start" sx={{ mt: -13 }}>
                      <MessageIcon
                        sx={{
                          color: theme.palette.text.secondary,
                          alignSelf: "flex-start",
                          mt: 1.5,
                        }}
                      />
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2.5,
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  border: "1.2px solid rgba(255,255,255,0.15)",
                  "& fieldset": {
                    borderColor: "rgba(255,255,255,0.15)",
                  },
                  "&:hover fieldset": {
                    borderColor: "rgba(255,255,255,0.25)",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "rgba(200,200,200,0.8)",
                    boxShadow: "0 0 20px rgba(200,200,200,0.4)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: theme.palette.text.secondary,
                  fontSize: "0.95rem",
                  resize: "none",
                  "&::placeholder": {
                    color: "rgba(255,255,255,0.4)",
                    opacity: 1,
                  },
                },
                "& .MuiInputBase-input:-webkit-autofill": {
                  WebkitBoxShadow: "0 0 0 1000px rgba(255,255,255,0.05) inset",
                  WebkitTextFillColor: "rgba(255,255,255,0.95)",
                },
                "& .MuiInputLabel-root": {
                  color: "rgba(255,255,255,0.6)",
                  "&.Mui-focused": {
                    color: "rgba(220,220,220,0.9)",
                  },
                },
              }}
            />
          </Stack>

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            type="submit"
            endIcon={<SendIcon />}
            sx={{
              py: 1.8,
              fontWeight: 700,
              fontSize: "1.05rem",
              borderRadius: 2.5,
              backgroundColor: theme.palette.background.default,
              color: theme.palette.text.secondary,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              position: "relative",
              overflow: "hidden",
              boxShadow:
                "0 14px 28px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.06) inset",
              transition:
                "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease, background 0.3s ease",
              // Inner glossy highlight
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.25) 0%, transparent 45%, transparent 55%, rgba(0,0,0,0.35) 100%)",
                mixBlendMode: "soft-light",
                opacity: 0.0,
                transition: "opacity 0.4s ease",
                pointerEvents: "none",
              },
              // Moving shine band
              "&::after": {
                content: '""',
                position: "absolute",
                top: "-30%",
                left: "-40%",
                width: "40%",
                height: "160%",
                background:
                  "linear-gradient(120deg, transparent, rgba(255,255,255,0.7), transparent)",
                transform: "skewX(-20deg) translateX(-150%)",
                opacity: 0,
                transition: "transform 0.6s ease-out, opacity 0.3s ease-out",
                pointerEvents: "none",
              },
              "&:hover": {
                transform: "translateY(-4px) scale(1.03)",
                background:
                  "linear-gradient(135deg, rgba(45,45,45,1) 0%, rgba(130,130,130,1) 100%)",
                boxShadow:
                  "0 18px 40px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.08) inset",
                "&::before": {
                  opacity: 0.7,
                },
                "&::after": {
                  opacity: 1,
                  transform: "skewX(-20deg) translateX(260%)",
                },
              },
              "&:active": {
                transform: "translateY(0px) scale(0.98)",
                boxShadow:
                  "0 8px 18px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.12) inset",
                background:
                  "linear-gradient(135deg, rgba(20,20,20,1) 0%, rgba(90,90,90,1) 100%)",
              },
              "&:disabled": {
                background:
                  "linear-gradient(135deg, rgba(60,60,60,0.9) 0%, rgba(90,90,90,0.9) 100%)",
                boxShadow: "0 6px 14px rgba(0,0,0,0.5)",
                color: "rgba(255,255,255,0.5)",
                cursor: "not-allowed",
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
