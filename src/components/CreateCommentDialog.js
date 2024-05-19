import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from "axios";

export default function FormDialog(props) {
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    createComment({body: inputValue}, localStorage.getItem("accessToken"))
    console.log('Form submitted with value:', inputValue);
    props.handleCloseCreateCommentDialog();
  };

  const createComment = async (comment, token) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/comments`,
        comment, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error('There was a problem with the axios operation:', error);
    }
  }

  return (
    <React.Fragment>
      <Dialog open={props.isOpenCreateCommentDialog} onClose={props.handleCloseCreateCommentDialog}>
        <DialogTitle>Create Comment</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="inputField"
            label="Write your comment"
            type="text"
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseCreateCommentDialog}>Cancel</Button>
          <Button onClick={handleFormSubmit} variant="contained" color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

