import CategoryCard from "./CategoryCard";
import {useEffect, useState} from "react";
import axios from 'axios';
import {Outlet} from "react-router-dom";
import Box from "@mui/material/Box";
import {useLocation} from 'react-router-dom';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function Categories(props) {
  const [categories, setCategories] = useState([]);
  const location = useLocation();
  const topicsOnScreen = location.pathname.includes('/topics');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/categories`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const listOfCategories = categories.length > 0 ? (
    categories.map(item => (
      <CategoryCard key={item.id} category={item}></CategoryCard>
    ))
  ) : (
    <Typography>No categories available.</Typography>
  );

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start"
    }}>
      <Container sx={{
        display: {
          xs: topicsOnScreen ? 'none' : "flex",  // mobile screens
          sm: 'flex'   // tablet screens and larger
        },
        flexDirection: "column",
        width: "auto",
        maxWidth: "none",
        margin: "0"
      }}>
        {listOfCategories}
      </Container>
      <Outlet/>
    </Box>
  )
}