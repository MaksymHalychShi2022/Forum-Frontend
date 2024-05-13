import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

export default function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://youtu.be/dQw4w9WgXcQ?si=4iceuHQj6I1zeFgJ">
        Some Site here
      </Link>{' '}
      2024
    </Typography>
  );
}