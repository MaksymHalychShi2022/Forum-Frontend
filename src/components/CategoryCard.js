import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {Link as RouterLink} from "react-router-dom";
import * as React from "react";

export default function CategoryCard(props) {
  return (
    <Typography variant="body2" color="text.secondary">
      <Link component={RouterLink} color="inherit" to={`/categories/${props.category.id}/topics`}>
        {props.category.title}
      </Link>
    </Typography>
  );
}