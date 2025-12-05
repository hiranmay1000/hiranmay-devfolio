import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        maxWidth: {
          xs: "100%",
          sm: "600px",
          md: "900px",
          lg: "1000px",
        },
        margin: "0 auto",
        padding: "40px 20px",
        pt: "100px",
      }}
    >
      {/* HOME SECTION */}
      <HeroSection />

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* PROJECTS SECTION */}
      <ProjectsSection />

      {/* CONTACT SECTION */}
      <ContactSection />
    </Box>
  );
}
