"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Avatar, IconButton, Stack } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import AppsIcon from "@mui/icons-material/Apps";
import CallIcon from "@mui/icons-material/Call";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { toggleTheme } from "@/redux/slice/themeReducer";

export default function Header() {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        paddingY: 1,
        mt: 2,
        height: "50px",
        display: "flex",
        justifyContent: "center",
        borderRadius: 3,
        background: theme.palette.background.glass,
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",
        left: "50%",
        transform: "translateX(-50%)",

        width: {
          xs: "95%",
          sm: "90%",
          md: "600px",
          lg: "650px",
        },
      }}
    >
      <Toolbar
        sx={{
          minHeight: "50px !important",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%", // <- keep this for inner layout
          paddingX: 2,
        }}
      >
        <Stack direction={"row"} display={"flex"} alignItems={"center"}>
          <Avatar
            src="/images/hiranmay-icon.png"
            sx={{
              height: 25,
              width: 25,
              // background: "#fff",
              filter: theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
            }}
          ></Avatar>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              letterSpacing: 1,
              fontFamily: "DM Sans",
              lineHeight: "1",
              ml: 0.7,
              color: theme.palette.text.primary,
            }}
          >
            Hiranmay.dev
          </Typography>
        </Stack>

        <span
          style={{
            fontWeight: "bolder",
            color: theme.palette.text.primary,
          }}
        >
          |
        </span>

        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            onClick={() => scrollToSection("home")}
            sx={{ color: theme.palette.text.primary }}
          >
            <HomeIcon />
          </IconButton>

          <IconButton
            onClick={() => scrollToSection("about")}
            sx={{ color: theme.palette.text.primary }}
          >
            <Person4Icon />
          </IconButton>

          <IconButton
            onClick={() => scrollToSection("projects")}
            sx={{ color: theme.palette.text.primary }}
          >
            <AppsIcon />
          </IconButton>

          <IconButton
            onClick={() => scrollToSection("contact")}
            sx={{ color: theme.palette.text.primary }}
          >
            <CallIcon />
          </IconButton>

          <IconButton
            onClick={handleThemeChange}
            sx={{ color: theme.palette.text.primary }}
          >
            {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
