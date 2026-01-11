import { Box, Divider, Paper, Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const GithubCardSkeleton = (props: { key: number }) => {
  const theme = useTheme();
  return (
    <Paper
      key={props.key}
      elevation={3}
      sx={{
        p: 3,
        minWidth: "270px",
        minHeight: "350px",
        borderRadius: 4,
        backdropFilter: "blur(10px)",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Title */}
      <Skeleton
        variant="text"
        height={22}
        width="70%"
        sx={{ bgcolor: theme.palette.background.default }}
      />
      <Skeleton
        variant="text"
        height={14}
        width="40%"
        sx={{ bgcolor: theme.palette.background.default }}
      />

      {/* Description */}
      <Skeleton
        variant="rounded"
        height={50}
        sx={{ bgcolor: theme.palette.background.default }}
      />

      {/* Chips */}
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 1 }}>
        <Skeleton
          variant="rounded"
          height={26}
          width={60}
          sx={{ bgcolor: theme.palette.background.default }}
        />
        <Skeleton
          variant="rounded"
          height={26}
          width={50}
          sx={{ bgcolor: theme.palette.background.default }}
        />
        <Skeleton
          variant="rounded"
          height={26}
          width={70}
          sx={{ bgcolor: theme.palette.background.default }}
        />
      </Box>

      <Divider sx={{ my: 1.5, borderColor: "rgba(255,255,255,0.15)" }} />

      {/* Bottom row */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Skeleton
          variant="text"
          width={120}
          height={18}
          sx={{ bgcolor: theme.palette.background.default }}
        />
        <Skeleton
          variant="rounded"
          width={50}
          height={18}
          sx={{ bgcolor: theme.palette.background.default }}
        />
      </Box>
    </Paper>
  );
};
