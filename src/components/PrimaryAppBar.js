import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import OptionMenu from "./OptionMenu"
import {useAuth} from "../AuthProvider";
import {Link as RouterLink} from "react-router-dom";
import * as React from "react";
import Button from "@mui/material/Button";
import ForumIcon from '@mui/icons-material/Forum';

export default function PrimaryAppBar(props) {
  const {isAuthenticated} = useAuth();

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" alignItems="center" component={RouterLink} to="/" color="inherit">
            <ForumIcon sx={{marginRight: 1}}/>
            <Typography variant="h5" color="inherit" sx={{textDecoration: "none"}}>
              Forum
            </Typography>
          </Box>
          <Box sx={{flexGrow: 1}}/>
          {isAuthenticated &&
            <Button
              variant="contained"
              onClick={props.onCreateCommentClick}
              sx={{color: "#ffffff"}}>
              Create Comment
            </Button>}
          {isAuthenticated && <OptionMenu/>}
          {!isAuthenticated && <Button component={RouterLink} to="/login" variant="contained">Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
