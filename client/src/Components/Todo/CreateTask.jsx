import React from 'react';

import AlertDialogSlide from './CreateTaskDialog';

export default function CreateTask() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '0px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        cursor: 'pointer',
      }}>
      <AlertDialogSlide />
    </div>
  );
}
