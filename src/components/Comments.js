import {useEffect, useState} from "react";
import axios from 'axios';
import CommentCard from "./CommentCard";
import {useParams} from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Comments(props) {
  const {categoryId, topicId} = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get(`${process.env.REACT_APP_API_URL}/categories/${categoryId}/topics/${topicId}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [categoryId, topicId]);

  const listOfComments = comments.length > 0 ? (
    comments.map(item => (
      <div key={item.id}>
        <CommentCard item={item}></CommentCard>
      </div>
    ))
  ) : (
    <Typography>No comments available.</Typography>
  );


  return (
    <Container>
      {listOfComments}
    </Container>
  )
}