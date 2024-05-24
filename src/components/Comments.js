import {Fragment, useEffect, useState} from "react";
import axios from 'axios';
import CommentCard from "./CommentCard";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CreateCommentDialog from "./CreateCommentDialog";
import {useOutletContext} from "react-router-dom";

export default function Comments(props) {
    const {
    isOpenCreateCommentDialog,
    handleOpenCreateCommentDialog,
    handleCloseCreateCommentDialog
  } = useOutletContext();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get(`${process.env.REACT_APP_API_URL}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const listOfComments = comments.length > 0 ? (
    comments.map(item => (
      <CommentCard key={item.id} item={item}></CommentCard>
    ))
  ) : (
    <Typography>No comments.</Typography>
  );

  return (
    <Fragment>
      <Container align="center" sx={{p: 0}}>
        {listOfComments}
      </Container>
      <CreateCommentDialog
        isOpenCreateCommentDialog={isOpenCreateCommentDialog}
        handleOpenCreateCommentDialog={handleOpenCreateCommentDialog}
        handleCloseCreateCommentDialog={handleCloseCreateCommentDialog}
      />
    </Fragment>
  )
}