import {useEffect, useState} from "react";
import axios from 'axios';
import TopicCard from "./TopicCard";
import {Outlet, useLocation, useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Topics(props) {
  const {categoryId} = useParams();
  const [topics, setTopics] = useState([]);
  const location = useLocation();
  const commentsOnScreen = location.pathname.includes('/comments');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response =
          await axios.get(`${process.env.REACT_APP_API_URL}/categories/${categoryId}/topics`);
        setTopics(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [categoryId]);

  const listOfTopics = topics.length > 0 ? (
    topics.map(item => (
      <div key={item.id}>
        <TopicCard topic={item} categoryId={categoryId}></TopicCard>
      </div>
    ))
  ) : (
    <Typography>No topics available.</Typography>
  );

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      width: "auto",
      maxWidth: "none",
    }}>
      <Container sx={{
        display: {
          xs: commentsOnScreen ? "none" : "flex",  // mobile screens
          sm: "flex"   // tablet screens and larger
        },
        width: "auto",
      }}>
        {listOfTopics}
      </Container>
      <Outlet/>
    </Box>
  )
}