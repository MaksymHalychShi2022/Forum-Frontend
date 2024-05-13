import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AvatarMenu from "./AvatarMenu"
import {useAuth} from "../AuthProvider";
import {Link as RouterLink} from "react-router-dom";
import Link from "@mui/material/Link";
import * as React from "react";

export default function PrimaryAppBar() {
  const {isAuthenticated} = useAuth();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            <Link component={RouterLink} color="inherit" to="/">
              Forum
            </Link>
          </Typography>
          <Box sx={{flexGrow: 1}}/>
          {isAuthenticated ? <AvatarMenu/> : (
            <Link component={RouterLink} to="/signin" variant="button" color="#ffffff">
              Login
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
