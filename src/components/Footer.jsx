import { Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <div>
      <Typography sx={{ justifyContent: 'center', pt: 5, pb: 5, mt: 3, display: 'flex', background: '#edfaff' }} variant="p" textAlign="center">
        2023 Copyright Sense & Respond Software LLC
      </Typography>
    </div>
  );
}

export default Footer;
