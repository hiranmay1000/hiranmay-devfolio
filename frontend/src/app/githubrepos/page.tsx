import GithubRepoSection from "@/components/sections/GithubRepoSection/GithubRepoSection";
import { Box } from "@mui/material";

export default function GithubRepos() {
  return (
    <Box minHeight={"calc(100vh - 80px)"}>
      <GithubRepoSection />;
    </Box>
  );
}
