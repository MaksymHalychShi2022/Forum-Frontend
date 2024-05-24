import Typography from "@mui/material/Typography";
import * as React from "react";
import {Card, CardActions, CardContent, Button} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from "@mui/material/IconButton";
import CardHeader from '@mui/material/CardHeader';
import { format } from 'date-fns';

export default function CommentCard(props) {
  const formattedCreatedAt = format(new Date(props.item.created_at), 'yyyy MMMM dd, HH:mm');

  return (
    <Card sx={{
      p: 0,
      minWidth: 275,
      maxWidth: {xs: "100%", sm: "75%", md: "50%"}
    }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{bgcolor: "secondary.main"}}
            aria-label="recipe">
            {props.item.user.username[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon/>
          </IconButton>
        }
        title={props.item.user.username}
        titleTypographyProps={{sx: {display: 'flex',}}}
        // subheader="September 14, 2016"
        subheader={formattedCreatedAt}
        subheaderTypographyProps={{sx: {display: 'flex',}}}
      />
      <CardContent>
        <Typography variant="body2" display="flex">
          {props.item.body}
        </Typography>
      </CardContent>
      <CardActions>
        {/*<Button size="small">Learn More</Button>*/}
      </CardActions>
    </Card>
  );
}