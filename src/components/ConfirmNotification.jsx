import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Typography } from '@mui/material';

function ConfirmNotification({isOpen, onConfirm, onCancel}) {

  return (
    <div>
        <Dialog open={isOpen} fullWidth
  maxWidth="sm">
            <DialogTitle>
            <Typography variant='h4'>Delete</Typography>
            </DialogTitle>
            <DialogContent>
             <Typography variant='h6'>Are you sure?</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant='contained' color='error' onClick={onConfirm}>Yes</Button>
                <Button variant='contained' onClick={onCancel}>No</Button>
            </DialogActions>
        </Dialog>
    </div>
  )
}

export default ConfirmNotification