import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function CreateTaskDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');

  const userId = localStorage.getItem('user_id');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    fetch('http://localhost:3001/tasks/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        name: name,
      }),
    }).then(() => {
      handleClose();
    });
  };

  return (
    <div>
      <AddCircleOutlinedIcon
        onClick={handleClickOpen}
        style={{ fontSize: '60px', marginBottom: '20px' }}
      />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle>Add Task</DialogTitle>
        <DialogContent>
          <TextField
            label='name'
            value={name}
            style={{ paddingBottom: '0px !important' }}
            onChange={(e) => {
              setName(e.target.value);
            }}
            ariant='standard'
          />
        </DialogContent>
        <DialogActions>
          <ArrowCircleUpIcon
            onClick={handleSave}
            style={{ fontSize: '40px', marginRight: '20px', cursor: 'pointer' }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
