import React from 'react';
import Snackbar from '@mui/material/Snackbar'; 
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function AlertNotification({showSnackbar, onCloseClickHandler, severity, AlertMessage}) {
  return (
    <Snackbar open={showSnackbar} onClick={onCloseClickHandler} severity={severity}> 
    <Alert severity={severity} sx={{ width: '100%' }}>
    {AlertMessage}
  </Alert>
  </Snackbar>
  )
}

export default AlertNotification