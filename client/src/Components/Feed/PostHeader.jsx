import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import ProfilePicture from './ProfilePicture';

export default function PostHeader() {
  const username = 'erictao04';
  const taskname = 'Go to the gym';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        borderRadius: '10px',
      }}>
      <div style={{ marginLeft: '10px', marginRight: '5px' }}>
        <ProfilePicture
          url={
            'https://lh3.googleusercontent.com/ogw/AAEL6sggMroyh3_FGElpcVH9_m54NQmXHQuHLh1J_INs8g=s32-c-mo'
          }
        />
      </div>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontWeight: '550', fontSize: '18px' }}>{username}</div>
        <div style={{ color: '#B5BEC8', display: 'flex', alignItems: 'center', fontSize: '12px' }}>
          <DownloadDoneIcon style={{ fontSize: '15px' }} />
          Task Completed: "{taskname}"
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'end', marginRight: '5px' }}>
        <MoreVertIcon />
      </div>
    </div>
  );
}
