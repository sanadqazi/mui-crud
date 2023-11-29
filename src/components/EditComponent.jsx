import React, { useState, useEffect } from 'react';
import { TextField, TextareaAutosize, Button, Grid } from '@mui/material';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AlertNotification from './AlertNotification';


const EditComponent = () => {
  const { id } = useParams(); 

  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');

  // Notification
  const [showSnackbar, setShowSnackbar] = useState(false); 
  
  const onOpenClickHandler = () => { 
      setShowSnackbar(true); 
  }; 

  const onCloseClickHandler = (event) => { 
      setShowSnackbar(false); 
  }; 


  // API Call
  useEffect(() => {
  const fetchPostData = async () => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      setEditedTitle(response.data.title);
      setEditedBody(response.data.body);
    } catch {
      console.log('Error fetching post data');
    }
  } 
  fetchPostData();
}, [id]);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const formResponse = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: e.target.title.value,
      body: e.target.body.value
    });
    if(formResponse.status === 200) {
      onOpenClickHandler();
      setTimeout(() => {
        onCloseClickHandler();
      }, 3000);
    }
  } catch {
    console.log('Not working');
    }
  }

  return (
    <>
    <Header />
    <Container maxWidth="xl" sx={{ mt: 2}}>
      <h2>Edit Card</h2>
      <form onSubmit={handleSubmit} id={id}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <TextField
              label="Title"
              variant="outlined"
              fullWidth
              id="title"
              name="title"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextareaAutosize
              minRows={3}
              placeholder="Body"
              id="body"
              name="body"
              style={{ width: '100%', padding: '8px', resize: 'vertical' }}
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    <AlertNotification showSnackbar={showSnackbar} onCloseClickHandler={onCloseClickHandler} AlertMessage={'Post updated successfully'} severity={'success'} />
    </>
  );
};

export default EditComponent;
