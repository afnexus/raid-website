import { Box, Typography } from "@mui/material";

// const blinker = keyframes`
//     50% {
//         opacity: 0.3;
//     }
// `;

export default function ScrollDownPrompt() {
  // const animation = `${blinker} infinite 2s linear`;
  return (
    <Box
      sx={{
        alignItems: "center",
        color: "white",
        justifyContent: "center",
        position: "fixed",
        textAlign: "center",
        w: "100vw",
        p: 5,
        paddingTop: "85vh",
      }}
    >
      <Typography>scroll for more</Typography>
    </Box>
  );
}
