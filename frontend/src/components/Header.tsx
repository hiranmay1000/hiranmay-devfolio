"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { DarkMode, LightMode } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { Avatar, IconButton, Stack, useMediaQuery } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Person4Icon from "@mui/icons-material/Person4";
import AppsIcon from "@mui/icons-material/Apps";
import CallIcon from "@mui/icons-material/Call";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { toggleTheme } from "@/redux/slice/themeReducer";
import { useRouter } from "next/navigation";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export default function Header({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleThemeChange = () => {
    dispatch(toggleTheme());
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleIconClick = () => {
    router.push("/");
  };

  return (
    <>
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
          boxShadow: `0px 0px 50px ${theme.palette.boxShadow}`,

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
          <Stack
            direction={"row"}
            display={"flex"}
            alignItems={"center"}
            sx={{
              cursor: "pointer",
            }}
            onClick={handleIconClick}
          >
            <Avatar
              src="/images/hiranmay-icon.png"
              sx={{
                height: 25,
                width: 25,
                // background: "#fff",
                filter:
                  theme.palette.mode === "dark" ? "invert(1)" : "invert(0)",
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

          {isMobile && (
            <IconButton
              onClick={() => setOpen(true)}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {!isMobile && (
            <>
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
                  {theme.palette.mode === "light" ? (
                    <DarkMode />
                  ) : (
                    <LightMode />
                  )}
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        swipeAreaWidth={30}
        disableSwipeToOpen={false}
      >
        <Box
          sx={{
            pt: 2,
            pb: 3,
            background: theme.palette.background.glass,
            backdropFilter: "blur(15px)",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection("home")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection("about")}>
                <ListItemIcon>
                  <Person4Icon />
                </ListItemIcon>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection("projects")}>
                <ListItemIcon>
                  <AppsIcon />
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={() => scrollToSection("contact")}>
                <ListItemIcon>
                  <CallIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton onClick={handleThemeChange}>
                <ListItemIcon>
                  {theme.palette.mode === "light" ? (
                    <DarkMode />
                  ) : (
                    <LightMode />
                  )}
                </ListItemIcon>
                <ListItemText primary="Toggle Theme" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
