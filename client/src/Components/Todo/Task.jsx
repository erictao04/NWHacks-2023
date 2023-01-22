import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

export default function Task() {
  const taskName = 'Go to the gym';

  return (
    <div style={{ backgroundColor: 'white', borderRadius: '30px' }}>
      <div style={{ display: 'flex', fontSize: '16px', alignItems: 'center' }}>
        <RadioButtonUncheckedIcon style={{ fontSize: '35px', marginLeft: '5px' }} />
        <div
          style={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '12px',
          }}>
          {taskName}
        </div>
        <CancelIcon style={{ fontSize: '15px', marginRight: '15px' }} />
      </div>
    </div>
  );
}
