import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadImageDialog from './UploadImageDialog';

export default function Task({ task }) {
  const taskName = task.task_name;
  const completed = !!task.completed;
  const [open, setOpen] = React.useState(false);

  const handleCheck = () => {
    if (completed) {
      fetch('http://localhost:3001/tasks/', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task_id: task.id,
          name: taskName,
          completed: !completed,
          picture_url: '',
        }),
      });
    } else {
      setOpen(true);
    }
  };

  const handleDelete = () => {
    fetch('http://localhost:3001/tasks/', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        task_id: task.id,
      }),
    });
  };

  const button = completed ? (
    <CheckCircleIcon
      style={{ fontSize: '35px', marginLeft: '5px', color: '#CBDAD5', cursor: 'pointer' }}
      onClick={handleCheck}
    />
  ) : (
    <RadioButtonUncheckedIcon
      style={{ fontSize: '35px', marginLeft: '5px', cursor: 'pointer' }}
      onClick={handleCheck}
    />
  );

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '30px' }}>
      <div style={{ display: 'flex', fontSize: '16px', alignItems: 'center' }}>
        {button}
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '12px',
            color: completed ? '#CBDAD5' : 'inherit',
            textDecoration: completed ? 'line-through' : 'none',
          }}>
          {taskName}
        </div>
        <CancelIcon
          onClick={handleDelete}
          style={{
            cursor: 'pointer',
            fontSize: '15px',
            marginRight: '15px',
            visibility: completed ? 'hidden' : 'visible',
          }}
        />
      </div>
      <UploadImageDialog task={task} open={open} setOpen={setOpen} />
    </div>
  );
}
