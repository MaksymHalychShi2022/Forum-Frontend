import Typography from "@mui/material/Typography";
import * as React from "react";

export default function CommentCard(props) {
  return (
    <Typography variant="body2" color="text.secondary">
      {props.item.body}
    </Typography>
  );
}