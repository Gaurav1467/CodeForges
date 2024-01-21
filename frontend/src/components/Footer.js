import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ position: "fixed", bottom: "0", width: "100vw" }}>
      <Typography sx={{ textAlign: "center", color: "#00E5B5", pb: 2 }}>
        Designed and coded with ❤ by
        <Link
          href="https://www.linkedin.com/in/gaurav-sharma5764/"
          underline="hover"
          color="inherit"
          target="_blank"
          sx={{ ml: 1 }}
        >
          <strong>Gaurav Sharma</strong>
        </Link>
      </Typography>
    </Box>
  );
}
