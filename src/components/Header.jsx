import React from 'react';
import SNRLOGO from '../assets/respond.png';
import { AppBar, Toolbar, Typography, CssBaseline, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{ background: '#2E3B55', justifyContent: 'space-between' }}>
          <Link to="/" >
            <img src={SNRLOGO} width='50px' alt='Logo' />
            </Link>
             <Typography variant='h6'>
             Sense & Respond
            </Typography>

            <Button variant="contained" component={Link} to={`/post`}>
              Create Post
            </Button>
        </Toolbar>
      </AppBar>
      </Box>
    </>
  )
}

export default Header