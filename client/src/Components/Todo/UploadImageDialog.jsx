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

export default function UploadImageDialog({ task, open, setOpen }) {
  const [file, setFile] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (e) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    fetch('http://localhost:3001/tasks/', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task_id: task.id,
        name: task.task_name,
        completed: 1,
      }),
    }).then(() => {
      handleClose();
    });

    if (file) {
      const form = new FormData();
      form.append('image', file);
      form.append('task_id', task.id);

      fetch('http://localhost:3001/tasks/upload-image', {
        method: 'PUT',
        body: form,
      }).then(() => {
        handleClose();
      });
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby='alert-dialog-slide-description'>
        <DialogTitle>Share progress with friends!</DialogTitle>
        <DialogContent>
          <TextField
            label='name'
            type='file'
            style={{ paddingBottom: '0px !important' }}
            ariant='standard'
            onChange={handleFileChange}
          />
        </DialogContent>
        <DialogActions>
          <ArrowCircleUpIcon
            onClick={handleUpload}
            style={{ fontSize: '40px', marginRight: '20px', cursor: 'pointer' }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
