import React, { useState } from 'react';
import { TextField, TextareaAutosize, Button, Grid } from '@mui/material';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import axios from 'axios';
import AlertNotification from './AlertNotification';

function CreatePost() {

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

    // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const formResponse = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      title: e.target.title.value,
      body: e.target.body.value
    });
    if(formResponse.status === 201) {
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
      <h2>Add Post</h2>
      <form onSubmit={handleSubmit}>
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
              Add Post
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
    <AlertNotification showSnackbar={showSnackbar} onCloseClickHandler={onCloseClickHandler} AlertMessage={'Post added successfully'} severity={'success'} />
    </>
  )
}

export default CreatePost