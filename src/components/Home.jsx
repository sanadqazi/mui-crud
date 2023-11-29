import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Container from '@mui/material/Container';
import { Grid, Button, Box } from '@mui/material';
import ConfirmNotification from './ConfirmNotification';
import AlertNotification from './AlertNotification';
import CardComp from './CardComp';
import { useFetchDataWithParams, useDeleteDataMutation } from '../queries/queries';


function Home() {
    const [posts, setPosts] = useState([]);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
    const [visibleItems, setVisibleItems] = useState(8);

    const [deleteData, {responseDelete}] = useDeleteDataMutation();

  // Notification
  const [showSnackbar, setShowSnackbar] = useState(false); 
  
  const onOpenClickHandler = () => { 
      setShowSnackbar(true); 
  }; 

  const onCloseClickHandler = () => { 
      setShowSnackbar(false); 
  }; 

  const { data, error, isError, isLoading } = useFetchDataWithParams(visibleItems, 0);

  useEffect(() => {
    if (!isLoading && !isError && data) {
      setPosts((prevPosts) => [...prevPosts, ...data]);
    }else {
      console.log(error);
    }
  }, [isLoading, isError, data, error]);

  const onDelete = (e) => {
    setDeleteDialogOpen(true);
    setDeleteId(e.target.id);
  }


  const handleOnConfirm = async (e) => {
    setDeleteDialogOpen(false);
    try {
      const result = await deleteData({ id: deleteId});
      if(result.data){
        onOpenClickHandler();
        setTimeout(()=>{
          onCloseClickHandler();
        }, 3000);
      }
    } catch {
      console.log('Error fetching data');
    }
  } 
    
  const handleOnCancel = (e) => {
    setDeleteDialogOpen(false);
  }

  const loadMore = () => {
    // Increase the number of visible items
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const showLess = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems - 4);
  }

  return (
    <>
    <Header />
    <Container maxWidth="xl" sx={{ mt: 3}}>
    <Grid container spacing={3}>
      {posts.slice(0, visibleItems).map((card) => (
            <CardComp
              key={card.id}
              id={card.id}
              title={card.title}
              body={card.body}
              onDelete={onDelete}
            />
          ))}
    </Grid>
    </Container>
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
    <Button style={{justifyContent: 'center', margin: 5}} variant="contained" onClick={loadMore}>
      Load More
    </Button>
    {posts.length > 8 && visibleItems > 8 && (
    <Button style={{justifyContent: 'center', margin: 5}} variant="contained" onClick={showLess}>
      Show Less
    </Button>
    )}
    </Box>
    <ConfirmNotification isOpen={deleteDialogOpen} onConfirm={handleOnConfirm} onCancel={handleOnCancel} />
    <AlertNotification showSnackbar={showSnackbar} onCloseClickHandler={onCloseClickHandler} AlertMessage={'Post deleted successfully'} severity={'success'} />
  </>
  )
}

export default Home