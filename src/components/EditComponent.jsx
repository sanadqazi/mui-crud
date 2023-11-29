import React, { useState, useEffect } from 'react';
import { TextField, TextareaAutosize, Button, Grid } from '@mui/material';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import AlertNotification from './AlertNotification';
import { useUpdateDataMutation, useFetchDataByIdWithParams } from '../queries/queries';


const EditComponent = () => {
  const { id } = useParams(); 

  const [editedTitle, setEditedTitle] = useState('');
  const [editedBody, setEditedBody] = useState('');

  const [updateData] = useUpdateDataMutation();
  

  // Notification
  const [showSnackbar, setShowSnackbar] = useState(false); 
  
  const onOpenClickHandler = () => { 
      setShowSnackbar(true); 
  }; 

  const onCloseClickHandler = (event) => { 
      setShowSnackbar(false); 
  }; 

  const { data, error, isError, isLoading } = useFetchDataByIdWithParams(id);


  // API Call
  useEffect(() => {
    if (!isLoading && !isError && data) {
      setEditedTitle(data.title);
      setEditedBody(data.body);
    }else {
      console.log(error);
    }
  }, [isLoading, isError, data, error]);


  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

      const result = await updateData({id, title: e.target.title.value, body: e.target.body.value});

      if(result.data){
        onOpenClickHandler();
      setTimeout(() => {
        onCloseClickHandler();
      }, 3000);
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
