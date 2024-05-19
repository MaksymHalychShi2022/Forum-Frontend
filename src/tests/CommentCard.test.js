import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CommentCard from '../components/CommentCard';
import {createTheme, ThemeProvider} from '@mui/material/styles';

// Create a MUI theme to wrap the component
const theme = createTheme();

const mockProps = {
  item: {
    user: {
      username: 'testuser'
    },
    created_at: '2024-05-19T06:26:31.697771',
    body: 'This is a test comment'
  }
};

test('renders CommentCard with correct content', () => {
  render(
    <ThemeProvider theme={theme}>
      <CommentCard item={mockProps.item}/>
    </ThemeProvider>
  );

  // Check if the username is rendered
  expect(screen.getByText('testuser')).toBeInTheDocument();

  // Check if the first letter of the username is rendered inside the Avatar
  expect(screen.getByText('T')).toBeInTheDocument();

  // Check if the created_at date is rendered
  expect(screen.getByText('2024 May 19, 06:26')).toBeInTheDocument();

  // Check if the comment body is rendered
  expect(screen.getByText('This is a test comment')).toBeInTheDocument();
});
